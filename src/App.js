import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Hero />
        <About />
      </main >
    );
  }
}