import React from "react";
import SmoothScroll from "./../../components/Common/SmoothScroll/SmoothScroll";
import Header from "./../../components/Servicios/Header";
import Despachantes from "./../../components/Servicios/Despachantes";
import Logistica from "./../../components/Servicios/Logistica";
import Deposito from "./../../components/Servicios/Deposito";
import Mudanzas from "./../../components/Servicios/Mudanzas";
import FajaContacto from "./../../components/Common/FajaContacto";
import Formulario from "./../../components/Common/Formulario";

import "./styles.css";

export default function Servicios() {
  const handleScroll = ({ scrollToAnchor }) => {
    return (
      <section className="servicios page">
        <Header scrollToAnchor={scrollToAnchor} />
        <Despachantes />
        <Logistica />
        <Deposito />
        <Mudanzas />
        <FajaContacto />
        <Formulario />
      </section>
    );
  };

  return <SmoothScroll>{handleScroll}</SmoothScroll>;
}
