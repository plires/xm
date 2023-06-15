import React from "react";
import FormularioContacto from "./../../../utils/FormularioContacto";
import "./styles.css";

const Formulario = () => {
  return (
    <section className="formulario container">
      <div className="row">
        <div className="col-md-6 offset-md-3 background_fill">
          <h2 data-aos="fade-up">
            ¿tenés dudas sobre nuestros servicios? escribínos
          </h2>
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
};

export default Formulario;
