import React from "react";

import Header from "./../../components/Contacto/Header";
import Intro from "./../../components/Contacto/Intro";
import Mapa from "./../../components/Contacto/Mapa";

import "./styles.css";

export default function Tecnologia() {
  return (
    <section className="contacto page">
      <Header />
      <Intro />
      <Mapa />
    </section>
  );
}
