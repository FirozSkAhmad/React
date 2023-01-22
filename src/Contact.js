import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Contact() {
  return (
    <>
      <h1>Contact Us through</h1>
      <Link to="company">Company</Link>{" "}
      <Link to="channel">Channel</Link>{" "}
      <Link to="other">Other</Link>
      <Outlet/>
    </>
  );
}

export default Contact;
