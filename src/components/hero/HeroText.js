import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';

export default class HeroText extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="text-white text-center text-md-left">
          Welcome! <br />
          This is <code>@thexdev</code>
        </h1>
        <p className="lead d-none d-md-block my-5">
          <span role="img" className="mr-2" aria-label="waving hand">👋🏻</span>
          Hi, I'm a web and mobile app developer. <br />
          I like to write clean and orgenized code. <br />
          But I hate semicolon and read a sphagetti code.
        </p>
        <p className="lead d-none d-md-block mb-5">
          I dedicate myself to open source projects and solve problems by writing code based on algorithms. <br />
        </p>
        <p className="lead d-none d-md-block">
          Do you want to be my friend or hire me for a job?
        </p>
        <Button className="rounded-pill shadow d-none d-md-inline" size="lg">Just click here!</Button>
      </Fragment>
    );
  }
}