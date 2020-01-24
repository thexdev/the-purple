import React, { lazy, memo } from "react";

const GithubBoxImage = lazy(() => import("./github-box-image"));
const GithubBoxContent = lazy(() => import("./github-box-content"));

function GithubBox(props) {
  return (
    <div
      className="d-flex border rounded p-3 mb-4"
      style={{
        background: "linear-gradient(to left, #d3cce3, #e9e4f0)"
      }}
    >
      <GithubBoxImage {...props.image} />
      <GithubBoxContent {...props.content} />
    </div>
  );
}

export default memo(GithubBox);
