import React, { memo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import styles from "assets/css/social-media-float-btn.module.css";

const SocialMediaFloatBtn = () => {
  return (
    <div
      className={`${styles.wrapper} d-none d-md-block bg-warning float-left position-fixed shadow-lg rounded-right`}
    >
      <ul className="list-unstyled p-2">
        <li className="my-3 mx-1">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>facebook</Tooltip>}
          >
            <a
              href="https://www.facebook.com/thexdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`${styles["text-purple"]} fab fa-lg fa-facebook`}
              ></i>
            </a>
          </OverlayTrigger>
        </li>
        <li className="mb-3 mx-1">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>twitter</Tooltip>}
          >
            <a
              href="https://twitter.com/thexdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`${styles["text-purple"]} fab fa-lg fa-twitter`}
              ></i>
            </a>
          </OverlayTrigger>
        </li>
        <li className="mb-3 mx-1">
          <OverlayTrigger placement="right" overlay={<Tooltip>medium</Tooltip>}>
            <a
              href="https://medium.com/@thexdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`${styles["text-purple"]} fab fa-lg fa-medium-m`}
              ></i>
            </a>
          </OverlayTrigger>
        </li>
        <li className="mb-3 mx-1">
          <OverlayTrigger placement="right" overlay={<Tooltip>github</Tooltip>}>
            <a
              href="https://github.com/thexdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${styles["text-purple"]} fab fa-lg fa-github`}></i>
            </a>
          </OverlayTrigger>
        </li>
        <li className="mb-3 mx-1">
          <OverlayTrigger placement="right" overlay={<Tooltip>dev.to</Tooltip>}>
            <a
              href="https://dev.to/thexdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${styles["text-purple"]} fab fa-lg fa-dev`}></i>
            </a>
          </OverlayTrigger>
        </li>
        <li className="mx-1">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>linkedin</Tooltip>}
          >
            <a
              href="https://www.linkedin.com/in/thexdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`${styles["text-purple"]} fab fa-lg fa-linkedin`}
              ></i>
            </a>
          </OverlayTrigger>
        </li>
      </ul>
    </div>
  );
};

export default memo(SocialMediaFloatBtn);
