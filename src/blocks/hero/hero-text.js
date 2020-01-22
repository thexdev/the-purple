import React, { lazy, memo } from "react";

const Emoji = lazy(() => import("components/emoji"));
const HeroBtnCall = lazy(() => import("./hero-btn-call"));

function HeroText() {
  return (
    <>
      <h1 className="text-white text-center text-md-left">
        Welcome! <br />
        This is <code>@thexdev</code>
      </h1>
      <p className="lead d-none d-md-block my-5">
        <Emoji label="waving hand" symbol="👋" />
        Hi, I'm a JAMStack and mobile app developer. <br />
        I like to write clean and orgenized code. <br />I hate semicolon and
        read a sphagetti code.
      </p>
      <p className="lead d-none d-md-block mb-5">
        <Emoji label="flame" symbol="🔥" />
        I dedicate myself to open source projects and solve problems by writing
        code based on algorithms. <br />
      </p>
      <p className="lead d-none d-md-block">
        <Emoji label="mutial best friend" symbol="🤙" />
        Do you want to be my friend or hire me for a job?
      </p>
      <HeroBtnCall />
    </>
  );
}

export default memo(HeroText);
