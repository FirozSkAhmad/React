import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

function User() {
  const location = useLocation();
  console.log(location);
  const params=useParams()
  return <h1>This is {params.name}'s Page</h1>;
}

export default User;
