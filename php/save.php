<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];

  if($method == "OPTIONS") {
    die();
  }

  require_once( __DIR__ . '/vendor/autoload.php' );
  require_once( __DIR__ . '/functions.php' );
  
  $dotenv = Dotenv\Dotenv::createImmutable( __DIR__ . '/../' );
  $dotenv->safeLoad();

  $response_array = [
    'success' => false,
    'msg' => 'Error desconocido'
  ];

  try {
    $require = json_decode(file_get_contents('php://input'));

    $recaptcha = verifyRecaptcha($require->recaptchaToken);

    if ($recaptcha['success']) {
      $conexion = new PDO( $_ENV['REACT_APP_DSN'], $_ENV['REACT_APP_DB_USER'], $_ENV['REACT_APP_DB_PASS'] );
    } else {
      $response_array = [
        'msg' => 'Error Recaptcha, volvé a intentar el envio por favor.'
      ];
    }
  
  } catch (Exception $e) {
    $response_array = [
      'msg' => 'Error en la conexion a la base de datos'
    ];
    echo json_encode($response_array);exit;
  }

  try {

    $sql = "INSERT INTO contacts values(default, :name, :email, :comments, :origin, :created_at)";
    $stmt = $conexion->prepare($sql);
    $stmt->bindValue(":name", $require->name, PDO::PARAM_STR);
    $stmt->bindValue(":email", $require->email, PDO::PARAM_STR);
    $stmt->bindValue(":comments", $require->comments, PDO::PARAM_STR);
    $stmt->bindValue(":origin", $require->origin, PDO::PARAM_STR);
    $stmt->bindValue(":created_at", date("Y-m-d H:i:s"), PDO::PARAM_STR);
    $save = $stmt->execute();

    if ($save) {
      $response_array = [
        'success' => true,
        'msg' => 'Consulta Grabada Exitosamente'
      ];
    }

    echo json_encode($response_array);

  } catch (Exception $e) {
    $response_array = [
      'msg' => 'No se pudo grabar la consulta, intente nuevamente'
    ];
    echo json_encode($response_array);exit;
  }

?>