import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      count: 0,
    };
    console.log('constructor');
  }
  toogle() {
    console.log('toogle');
    this.setState({ status: !this.state.status });
  }
  componentDidMount() {
    console.log('ComponentDidMount');
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  componentDidUpdate(preProps, preState, snapShot) {
    console.log('componentDidUpdate', preState, this.state.status);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
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
