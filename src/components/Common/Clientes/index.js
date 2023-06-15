import React from "react";
import "./styles.css";

import GaleriaImagenes from "./../GaleriaImagenes";
import GaleriaLogos from "./../GaleriaLogos";

const Clientes = (props) => {
  const { logos, imgsGaleria } = props;

  return (
    <section id="clientes" className="clientes container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 data-aos="fade-up">confían en nosotros</h2>
          </div>
        </div>
      </div>

      <div className="row content_logos">
        <div className="col-md-12">
          <GaleriaLogos imgs={logos} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 content_galeria_img">
          <GaleriaImagenes imgs={imgsGaleria} />
        </div>
      </div>
    </section>
  );
};

export default Clientes;
