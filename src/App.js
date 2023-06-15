import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop/ScrollToTop";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "./css/variables.css";
import "./css/common.css";
import "./css/fonts.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./js/app";

import HeaderTop from "./components/HeaderTop";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Soluciones from "./pages/Soluciones";
import Tecnologia from "./pages/Tecnologia";
import Tracking from "./pages/Tracking";
import Clientes from "./pages/Clientes";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}>
        <Router>
          <ScrollToTop />
          <HeaderTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
