import React from "react";
import "./styles.css";

const Iconografia = ({ iconos }) => {
  return (
    <section className="iconografia container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="row background_fill">
            {iconos.map((item, index) => (
              <div data-aos="fade-up" key={item.id} className="content col-6">
                <img
                  className="img-fluid"
                  src={require(`./../../../img/tecnologia/${item.src_img}`)}
                  alt={item.alt_img}
                />
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Iconografia;
