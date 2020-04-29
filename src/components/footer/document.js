import React, { memo } from 'react';

const Document = () => {
  return (
    <>
      <h5 className="mb-3">Document</h5>
      <ul className="list-unstyled">
        <li className="my-1">
          <a
            href="https://drive.google.com/file/d/1h54pxCR3Si7N2fngWoBTAKbUrC3HxxUm/view?usp=sharing"
            className="text-decoration-none text-secondary"
          >
            Curriculumn Vitae
          </a>
        </li>
        <li className="my-1">
          <a href="/" className="text-decoration-none text-secondary">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
};

export default memo(Document);
