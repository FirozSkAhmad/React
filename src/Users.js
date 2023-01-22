import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const params=useParams()
  return <h1>This is {params.name}'s Page</h1>;
}

export default User;
