import React, { memo } from "react";

function Emoji({ label, symbol }) {
  return (
    <span
      role="img"
      className="mr-2"
      aria-label={label ? label : ""}
      aria-hidden={label ? label : ""}
    >
      {symbol}
    </span>
  );
}

export default memo(Emoji);
