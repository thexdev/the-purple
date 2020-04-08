import React, { memo } from "react";
import styles from "assets/css/social-media-float-btn.module.css";

const Mobile = () => {
  return (
    <div
      className={`${styles.wrapper} d-block d-md-none bg-warning float-left fixed-bottom m-3 shadow-lg rounded-lg`}
    >
      <ul className="list-unstyled mb-0 text-center">
        <li className="my-3 mx-2 px-2 d-inline-block">
          <a
            href="https://www.facebook.com/thexdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles["text-purple"]} fab fa-lg fa-facebook`}></i>
          </a>
        </li>
        <li className="mb-3 mx-1 px-2 d-inline-block">
          <a
            href="https://twitter.com/thexdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles["text-purple"]} fab fa-lg fa-twitter`}></i>
          </a>
        </li>
        <li className="mb-3 mx-1 px-2 d-inline-block">
          <a
            href="https://medium.com/@thexdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles["text-purple"]} fab fa-lg fa-medium-m`}></i>
          </a>
        </li>
        <li className="mb-3 mx-1 px-2 d-inline-block">
          <a
            href="https://github.com/thexdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles["text-purple"]} fab fa-lg fa-github`}></i>
          </a>
        </li>
        <li className="mb-3 mx-1 px-2 d-inline-block">
          <a
            href="https://dev.to/thexdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles["text-purple"]} fab fa-lg fa-dev`}></i>
          </a>
        </li>
        <li className="mx-1 px-2 d-inline-block">
          <a
            href="https://www.linkedin.com/in/thexdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles["text-purple"]} fab fa-lg fa-linkedin`}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(Mobile);
