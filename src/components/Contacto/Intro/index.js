import React from "react";
import "./styles.css";

const Intro = () => {
  return (
    <section className="intro container">
      <div className="row">
        <div className="tecnologia_icon col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="content">
            <img
              className="img-fluid"
              src={require("./../../../img/soluciones/flecha-arriba.png")}
              alt="flecha arriba"
            />
            <h2>contacto</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="data col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h2>Buenos Aires</h2>
          <p>
            Dirección: Puente del Inca 2450, B1813 Ezeiza. <br />
            Whatsapp: (+54 9 11) 2117 4201 <br />
            Teléfono: (+54 11) 3866 2077 <br />
            Email: info@xmlogistica.com.ar
          </p>
        </div>
      </div>
    </section>
  );
};
export default Intro;
