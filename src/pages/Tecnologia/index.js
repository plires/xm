import React from "react";

import Header from "./../../components/Tecnologia/Header";
import Intro from "./../../components/Tecnologia/Intro";
import Iconografia from "./../../components/Tecnologia/Iconografia";
import Video from "./../../components/Tecnologia/Video";
import Formulario from "./../../components/Common/Formulario";

import { getIconosTecnologia } from "./../../utils/dataUtils.js";

import "./styles.css";

export default function Tecnologia() {
  const iconos = getIconosTecnologia("iconos");
  return (
    <section className="tecnologia page">
      <Header />
      <Intro />
      <Iconografia iconos={iconos} />
      <Video />
      <Formulario />
    </section>
  );
}
