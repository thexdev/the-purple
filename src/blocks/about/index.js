import React, { useState, lazy, memo } from "react";
import vr from "assets/images/icon/vr.svg";
import aboutContents from "./about-data";

const SectionGrid3 = lazy(() =>
  import("components/section-grid/section-grid-3")
);

const Skillset = lazy(() => import("blocks/skillset"));

function About() {
  const [icon] = useState({
    name: vr,
    alternative: "robot"
  });

  const [contents] = useState(aboutContents);

  return (
    <>
      <SectionGrid3
        heading="about me"
        subheading="a freak and passionate person"
        icon={icon}
        contents={contents}
      />
      <Skillset />
    </>
  );
}

export default memo(About);
