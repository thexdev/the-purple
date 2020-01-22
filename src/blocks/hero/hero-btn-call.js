import React, { useState, memo } from "react";
import { Button } from "react-bootstrap";

function HeroBtnCall() {
  const [text, setText] = useState("Yes, click here!");
  return (
    <Button
      className="rounded-pill shadow d-none d-md-inline"
      size="lg"
      onClick={() => setText("Uh, Awesome ❤️")}
    >
      {text}
    </Button>
  );
}

export default memo(HeroBtnCall);
