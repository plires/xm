import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const FajaContacto = () => {
  return (
    <section data-aos="fade-up" className="container-fluid faja_contacto">
      <div className="container">
        <div className="row">
          <div className="col-md-12 content">
            <p>
              ¿Estás buscando un servicio de envío confiable y eficiente para
              tus productos?
            </p>
            <Link to="/contacto" className="transition btn btn-primary">
              _contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FajaContacto;
