import React from "react";
import { NavLink, Link } from "react-router-dom";

import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";

import "./styles.css";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3 logo">
            <Link to="/">
              <img
                className="img-fluid transition"
                src={require("./../../img/footer/logo-footer.png")}
                alt="logo xm footer"
              />
            </Link>
          </div>

          <nav className="col-md-6">
            <ul>
              <li>
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/nosotros">
                  nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/servicios">
                  servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/soluciones">
                  soluciones
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/tecnologia">
                  tecnologia
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/tracking">
                  tracking
                </NavLink>
              </li>
              <li className="margin_out">
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/clientes">
                  clientes
                </NavLink>
              </li>
              <li className="margin_out">
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/contacto">
                  contacto
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="col-md-3 rrss">
            <Link className="transition" target="_blank" to="/">
              <MdFacebook />
            </Link>
            <Link className="transition" to="#" target="_blank">
              <RiInstagramFill />
            </Link>
            <Link className="transition" target="_blank" to="/">
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
      </div>

      <div className="container libre">
        <div className="row">
          <div className="col-md-12">
            <Link
              className="transition"
              target="_blank"
              to="https://librecomunicacion.net/">
              by Libre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
