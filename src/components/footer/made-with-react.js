import React, { memo } from "react";
import Emoji from "components/emoji";
import ReactLogo from "assets/images/logo/react.svg";

const MadeWithReact = () => {
  return (
    <>
      <img
        src={ReactLogo}
        alt="reactjs logo"
        className="mx-md-auto d-md-block"
        width="100"
        height="100"
      />
      <p className="text-md-center text-secondary">
        made with <Emoji label="love" symbol="❤️" /> +{" "}
        <span className="text-info">React.js</span>
      </p>
    </>
  );
};

export default memo(MadeWithReact);
