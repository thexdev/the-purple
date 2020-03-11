import React, { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <center>
        <header>
          <h1>Sorry, page not found :(</h1>
          <Link to="/">Back to Home</Link>
        </header>
      </center>
    </main>
  );
};

export default memo(NotFound);
