import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        <h2>What's Up {this.props.state}</h2>
      </div>
    );
  }
}

export default User;
