import React from "react";
import MapComponent from "./../../utils/MapComponent.js";

import "./styles.css";

export default function Tracking() {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-12 p-0">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
