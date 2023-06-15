import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Tracking = () => {
  return (
    <section className="tracking">
      <div className="container-fluid content_tracking">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div data-aos="fade-up" className="content">
                <div className="content_data">
                  <h3>tracking de envíos</h3>
                  <p>
                    Gracias a nuestro servicio de última tecnología podés
                    conocer al instante la ubicación y estado de tu envío.
                  </p>
                  <Link className="transition" to="/">
                    _ver más
                  </Link>
                </div>
                <img
                  data-aos="fade-up"
                  className="img-fluid tablet"
                  src={require("./../../../img/home/tablet.png")}
                  alt="tablet"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up"
          className="img-fluid logo_xm"
          src={require("./../../../img/home/xm-10.png")}
          alt="xm 10 años"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 content_parrafo">
            <p data-aos="fade-up">
              Una década de trabajo arduo, compromiso y dedicación. Gracias a
              nuestro equipo y clientes, hemos logrado consolidarnos como
              líderes en el mercado, ofreciendo soluciones eficientes y
              personalizadas para cada caso, utilizando la última tecnología
              disponible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
