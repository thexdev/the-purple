import React, { useState, lazy, memo } from "react";
import layers from "assets/images/icon/layers.svg";
import ServicesData from "./services-data";

const SectionGridBox4 = lazy(() =>
  import("components/section-grid/section-grid-box-4")
);

function Services() {
  const [icon] = useState({
    name: layers,
    alternative: "layers icon"
  });

  const [contents] = useState(ServicesData);

  return (
    <SectionGridBox4
      heading="services"
      subheading="lorem ipsum dolor sit amet"
      icon={icon}
      contents={contents}
    />
  );
}

export default memo(Services);
