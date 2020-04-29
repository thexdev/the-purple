import React, { memo } from 'react';

const HeroBtnCall = () => {
  return (
    <a
      href="https://www.linkedin.com/in/thexdev/"
      className="btn btn-danger btn-lg rounded-pill shadow d-none d-md-inline-block"
    >
      Yes, click here!
    </a>
  );
};

export default memo(HeroBtnCall);
