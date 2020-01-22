import React, { lazy, memo } from "react";

const BoxIcon = lazy(() => import("./box-icon"));
const BoxContent = lazy(() => import("./box-content"));

function Box(props) {
  return (
    <div
      className="d-flex border rounded p-3 mb-4"
      style={{
        background: "linear-gradient(to right, #9d50bb, #6e48aa)"
      }}
    >
      <BoxIcon {...props.icon} />
      <BoxContent {...props.content} />
    </div>
  );
}

export default memo(Box);
