import React, { PureComponent } from 'react';
import './style.css';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Hello {this.state.count}</h1>
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Name
        </button> */}
        <button onClick={() => this.setState({ count: 1 })}>Update Name</button>
      </div>
    );
  }
}

export default App;
