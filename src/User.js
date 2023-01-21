import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
    console.log('constructor');
  }
  toogle() {
    this.setState({ status: !this.state.status });
  }
  render() {
    console.log('render');
    return (
      <div>
        {this.state.status ? <h2>What's Up {this.props.state}</h2> : null}
        <button onClick={() => this.toogle()}>Click Me</button>
      </div>
    );
  }
}

export default User;
