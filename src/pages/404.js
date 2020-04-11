import React, { memo } from "react";

import "assets/css/404.css";
import layer404 from "assets/images/404/layer_404.png";
import illustration from "assets/images/404/Illustration.png";

const NotFound = () => {
  return (
    <div id="background">
      <div id="Background"></div>
      <div id="layer_404">
        <img src={layer404} alt="" />
      </div>
      <div id="Illustration" className="d-none d-md-block">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default memo(NotFound);
