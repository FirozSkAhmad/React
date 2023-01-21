import React, { Component } from 'react';
import './style.css';
import User from './User.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'firoz',
    };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <User state="..." />
      </div>
    );
  }
}

export default App;
