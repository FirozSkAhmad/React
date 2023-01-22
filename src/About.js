import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>About Me</h1>
      <Link to="/user/anil" state={{name:"anil"}}>Anil's Page</Link>{' '}
      <Link to="/user/sidhu">sidhu's Page</Link>
    </>
  );
}

export default About;
