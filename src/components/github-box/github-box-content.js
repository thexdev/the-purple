import React, { memo } from "react";

function GithubBoxContent(props) {
  return (
    <div className="text-white text-truncate">
      <h6 className="text-uppercase text-dark">{props.title}</h6>
      <small className=" text-dark">{props.description}</small>
    </div>
  );
}

export default memo(GithubBoxContent);
