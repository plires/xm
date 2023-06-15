import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import "./styles.css";

export default function Nav() {
  const [navMobile, setNavMobile] = useState(false);

  const activateMenu = () => {
    setNavMobile(!navMobile);
  };

  const closeMenuMobile = () => {
    setNavMobile(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("navigator");

      if (scrollPosition > 170) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="navigator"
      className="navigator transition container-fluid p-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 content_brand">
            <Link className="transition" to="/">
              <img
                onClick={closeMenuMobile}
                className="img-fluid transition"
                src={require("./../../img/header/logo-xm.png")}
                alt="logo xm logistica"
              />
            </Link>
            {navMobile ? (
              <AiOutlineClose onClick={activateMenu} className="btn_menu" />
            ) : (
              <RxHamburgerMenu onClick={activateMenu} className="btn_menu" />
            )}
          </div>

          <div className="col-lg-8 content_mobile">
            <nav className={`transition ${navMobile ? "open" : ""}`}>
              <ul>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={closeMenuMobile}
                    className="transition"
                    to="/nosotros">
                    nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={closeMenuMobile}
                    className="transition"
                    to="/servicios">
                    servicios
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={closeMenuMobile}
                    className="transition"
                    to="/soluciones">
                    soluciones
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={closeMenuMobile}
                    className="transition"
                    to="/tecnologia">
                    tecnologia
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={closeMenuMobile}
                    className="transition"
                    to="/tracking">
                    tracking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={closeMenuMobile}
                    className="transition"
                    to="/clientes">
                    clientes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    onClick={activateMenu}
                    className="transition"
                    to="/contacto">
                    contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
