import React, { Component } from 'react';
import HeroImageSrc from 'assets/img/hero-image.svg';

export default class HeroImage extends Component {
  render() {
    return (
      <img className="img-fluid" alt="cool snippet" src={HeroImageSrc} />
    );
  }
}