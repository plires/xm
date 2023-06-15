<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];

  if($method == "OPTIONS") {
    die();
  }

  $post = json_decode(file_get_contents('php://input'));
  $post = get_object_vars($post); // Convertir el objeto en un array

  require_once( __DIR__ . '/vendor/autoload.php' );
  require_once( __DIR__ . '/functions.php' );

  $dotenv = Dotenv\Dotenv::createImmutable( __DIR__ . '/../' );
  $dotenv->safeLoad();

  $response_array = [
    'success' => false,
    'msg' => 'Error desconocido'
  ];

  $name = $post['name'];
  $email = $post['email'];
  $comments = $post['comments'];

  // Sanitizar las entradas utilizando filter_var() y trim()
  $name_sanitizado = htmlspecialchars(trim($name), ENT_QUOTES, 'UTF-8');
  $email_sanitizado = filter_var(trim($email), FILTER_SANITIZE_EMAIL);
  $comments_sanitizados = htmlspecialchars(trim($comments), ENT_QUOTES, 'UTF-8');

  // Validar el formato del email
  if ( !emptyInput($name_sanitizado) && !emptyInput($comments_sanitizados) &&  emailValid(filter_var($email_sanitizado, FILTER_VALIDATE_EMAIL)) ) {
    
    sendEmail('Cliente', 'Contacto Cliente', $post);
    $send = sendEmail('Usuario', 'Contacto Usuario', $post);

    if ($send['success']) {
      echo json_encode($send);exit;
    }

  } else {

    echo json_encode($response_array);exit;
    
  }

?>