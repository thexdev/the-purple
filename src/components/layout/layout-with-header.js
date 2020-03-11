import React, { lazy, memo } from "react";
import { Jumbotron } from "react-bootstrap";

const Navigation = lazy(() => import("components/navigation"));

const LayoutWithHeader = props => {
  return (
    <main>
      <Navigation />
      <header>
        <Jumbotron fluid className="mt-md-5">
          <h1 className="text-center text-white">{props.title}</h1>
          <p className="text-center text-capitalize lead">{props.subtitle}</p>
        </Jumbotron>
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2d2b55"
          fillOpacity="1"
          d="M0,160L34.3,149.3C68.6,139,137,117,206,106.7C274.3,96,343,96,411,122.7C480,149,549,203,617,202.7C685.7,203,754,149,823,144C891.4,139,960,181,1029,186.7C1097.1,192,1166,160,1234,144C1302.9,128,1371,128,1406,128L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      {props.children}
    </main>
  );
};

export default memo(LayoutWithHeader);
