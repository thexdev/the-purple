import React, { lazy, memo } from "react";
import { Jumbotron } from "react-bootstrap";

const Navigation = lazy(() => import("components/navigation"));

const LayoutWithHeader = (props) => {
  const style = { backgroundColor: "#2d2b55" };
  return (
    <main>
      <Navigation />
      <header>
        <Jumbotron fluid style={style} className="mb-0 pb-0">
          <h1 className="text-center text-white pt-3 pt-md-5">{props.title}</h1>
          <p className="text-center text-white-50 text-capitalize lead">
            {props.subtitle}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f5f5f6"
              fillOpacity="1"
              d="M0,128L40,112C80,96,160,64,240,85.3C320,107,400,181,480,186.7C560,192,640,128,720,117.3C800,107,880,149,960,165.3C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </Jumbotron>
      </header>
      <section style={{ backgroundColor: "#f5f5f6" }}>{props.children}</section>
    </main>
  );
};

export default memo(LayoutWithHeader);
