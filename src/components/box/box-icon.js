import React, { memo } from "react";

function BoxIcon(props) {
  return (
    <img
      src={props.name}
      alt={props.alternative}
      className="img-fluid mr-3"
      width="20%"
    />
  );
}

export default memo(BoxIcon);
