import React from "react";
import "./styles.css";

const Intro = () => {
  return (
    <section className="intro container">
      <div className="row">
        <div className="soluciones_icon col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="content">
            <img
              className="img-fluid"
              src={require("./../../../img/soluciones/flecha-arriba.png")}
              alt="flecha arriba"
            />
            <h2>soluciones</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="data col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <p>
            Entendemos que cada negocio tiene desafíos distintos, por lo que
            creamos soluciones a medida para abordarlos de manera efectiva.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Intro;
