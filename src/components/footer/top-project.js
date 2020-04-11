import React, { memo } from "react";

const TopProject = () => {
  return (
    <>
      <h5 className="mb-3">Project</h5>
      <ul className="list-unstyled">
        <li className="my-1">
          <a href="" className="text-decoration-none text-secondary">
            Cash Flow
          </a>
        </li>
        <li className="my-1">
          <a href="" className="text-decoration-none text-secondary">
            Kepo Korona
          </a>
        </li>
        <li className="my-1">
          <a href="" className="text-decoration-none text-secondary">
            Cats Gallery
          </a>
        </li>
      </ul>
    </>
  );
};

export default memo(TopProject);
