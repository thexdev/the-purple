import React, { memo } from "react";
import HeroImageSrc from "assets/images/hero/hero-image.svg";

export default memo(() => (
  <img className="img-fluid" alt="cool snippet" src={HeroImageSrc} />
));
