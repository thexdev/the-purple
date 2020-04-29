import React, { memo } from 'react';

const TopProject = () => {
  return (
    <>
      <h5 className="mb-3">Project</h5>
      <ul className="list-unstyled">
        <li className="my-1">
          <a
            href="https://kepo-corona.netlify.app"
            className="text-decoration-none text-secondary"
          >
            Kepo Corona
          </a>
        </li>
        <li className="my-1">
          <a
            href="https://gratisan.netlify.app"
            className="text-decoration-none text-secondary"
          >
            Gratisan
          </a>
        </li>
      </ul>
    </>
  );
};

export default memo(TopProject);
