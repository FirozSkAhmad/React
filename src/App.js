import React, { Component } from 'react';
import './style.css';
import User from './User.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'firoz',
      status: true,
    };
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        {this.state.status ? <User state="..." /> : <h1>child removed</h1>}
        <button onClick={() => this.setState({ status: !this.state.status })}>Toogle</button>
      </div>
    );
  }
}

export default App;
