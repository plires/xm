import React from "react";

import "./styles.css";

const Intro = (props) => {
  const { iconos, lastClass } = props;
  return (
    <section className="iconos_caracteristicas">
      <div className="container">
        <div className="row">
          {iconos.map((item, index) => (
            <div
              key={item.id}
              className={`col-md-6 content ${lastClass ? "last" : ""}`}>
              <div className="content_item">
                <div data-aos="fade-up" className="content_header">
                  <img
                    className="img-fluid"
                    src={require(`./../../../img/nosotros/${item.src_img}`)}
                    alt="icono tecnologia"
                  />
                  <h3>{item.title}</h3>
                </div>
                <p data-aos="fade-up">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Intro;
