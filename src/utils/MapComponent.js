import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.vesselfinder.com/aismap.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiamos el script al desmontar el componente
      document.body.removeChild(script);
    };
  }, []);

  return <div id="mapContainer" />;
};

export default MapComponent;
