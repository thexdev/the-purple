import React, { memo } from "react";

function Icon({ name, alt, className }) {
  return (
    <img
      src={name}
      alt={alt ? alt : ""}
      className={className ? className : ""}
    />
  );
}

export default memo(Icon);
