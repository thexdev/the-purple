import React, { memo } from "react";

const SocialMedia = () => {
  return (
    <>
      <h5 className="mb-3">Social</h5>
      <ul className="list-unstyled">
        <li className="my-1">
          <a
            href="https://www.facebook.com/thexdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-secondary"
          >
            Facebook
          </a>
        </li>
        <li className="my-1">
          <a
            href="https://twitter.com/thexdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-secondary"
          >
            Twitter
          </a>
        </li>
        <li className="my-1">
          <a
            href="https://medium.com/@thexdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-secondary"
          >
            Medium
          </a>
        </li>
      </ul>
    </>
  );
};

export default memo(SocialMedia);
