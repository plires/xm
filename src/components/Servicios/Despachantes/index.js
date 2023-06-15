import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Despachantes = () => {
  return (
    <section id="despachantes" className="container-container despachantes">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content_img">
            <img
              data-aos="fade-up"
              className="img-fluid"
              src={require("./../../../img/servicios/container.jpg")}
              alt="container"
            />
          </div>
          <div className="col-md-6 content_data">
            <div data-aos="fade-up" className="content_title">
              <h2>despachantes</h2>
              <span></span>
            </div>
            <ul data-aos="fade-up">
              <li>- Servicio de despachos de Importación y Exportación</li>
              <li>- Asesoramiento integral en materia aduanera</li>
              <li>- Clasificación Arancelaria</li>
              <li>- Confección de documentos</li>
              <li>- Seguimiento de importaciones temporales</li>
              <li>
                - Gestiones ante organismos oficiales y Cámaras de Comercio
              </li>
              <li>- Tramitación de reintegros y demás beneficios</li>
              <li>- Gestiones en todas las zonas francas</li>
              <li>- Cobertura en todo el país</li>
              <li>- Gestiones ante secretaria de industria</li>
            </ul>
            <Link data-aos="fade-up" to="/contacto" className="transition link">
              _solicitar información
            </Link>

            <img
              data-aos="fade-up"
              className="img-fluid flecha_abajo"
              src={require("./../../../img/servicios/flecha-abajo.png")}
              alt="flecha abajo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Despachantes;
