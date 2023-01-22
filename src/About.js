import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>About Me</h1>
      <Link to="/user/anil">Anil's Page</Link>{' '}
      <Link to="/user/sidhu">sidhu's Page</Link>
    </>
  );
}

export default About;
