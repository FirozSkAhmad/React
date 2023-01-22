import React, { Component, createRef } from 'react';
import './style.css';
import User from './User.js';

class App extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  updateInput() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.focus();
    this.inputRef.current.style.color = 'red';
  }
  render() {
    return (
      <div>
        <h1>Hello !</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.updateInput()}>Click Me</button>
        <User state="..." />
      </div>
    );
  }
}

export default App;
