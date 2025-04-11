import "pannellum/build/pannellum.css";

import rav4Panaroma from "assets/panaromic360.jpg";
import React, { useEffect, useRef } from "react";
import { Pannellum } from "react-pannellum";
const PanoramaViewer = () => {
  const viewerRef = useRef(null);
  const config = {
    autoRotate: -2,
  };

  return (
    <div ref={viewerRef} style={{ width: "100%", height: "500px" }}>
      <Pannellum
        width="100%"
        height="500px"
        image={rav4Panaroma}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl
        hotspots={[
          {
            pitch: 10,
            yaw: 120,
            type: "custom",
            cssClass: "custom-hotspot",
            clickHandlerFunc: () => alert("Popup!"),
            clickHandlerArgs: {},
          },
        ]}
      />
    </div>
  );
};

export default PanoramaViewer;
