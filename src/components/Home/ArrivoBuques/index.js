import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ArrivoBuques = () => {
  return (
    <section className="arrivo_buques container-fluid">
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className="col-md-5 content_data">
            <h2>arribo de buques</h2>
            <p>
              Información en tiempo real sobre tu carga, para que puedas
              planificar y coordinar eficientemente sus operaciones.
            </p>
            <Link className="transition" to="/">
              _ver más
            </Link>
          </div>
          <div data-aos="fade-up" className="col-md-7 content_buque">
            <img
              className="img-fluid"
              src={require("./../../../img/home/barco.png")}
              alt="barco"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrivoBuques;
