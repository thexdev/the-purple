import React, { memo } from "react";

function GithubBoxImage(props) {
  return (
    <img
      src={props.name}
      alt={props.alternative}
      className="rounded-circle mr-3"
      style={{ width: "auto", height: "40px", objectFit: "cover" }}
    />
  );
}

export default memo(GithubBoxImage);
