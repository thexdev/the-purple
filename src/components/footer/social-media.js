import React, { memo } from "react";

const SocialMedia = () => {
  return (
    <>
      <h5 className="mb-3">Social</h5>
      <ul className="list-unstyled">
        <li className="my-1">
          <a href="" className="text-decoration-none text-secondary">
            Facebook
          </a>
        </li>
        <li className="my-1">
          <a href="" className="text-decoration-none text-secondary">
            Twitter
          </a>
        </li>
        <li className="my-1">
          <a href="" className="text-decoration-none text-secondary">
            Medium
          </a>
        </li>
      </ul>
    </>
  );
};

export default memo(SocialMedia);
