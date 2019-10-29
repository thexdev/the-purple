import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';

export default class App extends Component {
  render() {
    return (
      <main style={{ backgroundColor: '#f5f5f6' }}>
        <Navbar />
        <Hero />
      </main >
    );
  }
}