import { React } from "react";
import FormularioContacto from "./../../../utils/FormularioContacto.js";
import "./styles.css";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <h1 data-aos="fade-up">hablemos</h1>
            <FormularioContacto />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
