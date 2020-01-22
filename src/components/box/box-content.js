import React, { memo } from "react";

function BoxContect(props) {
  return (
    <div className="text-white">
      <h5 className="text-uppercase">{props.title}</h5>
      <small>{props.description}</small>
    </div>
  );
}

export default memo(BoxContect);
