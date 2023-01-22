import React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Welcome to Home page</h1>
    </>
  );
}

export default App;
