import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('firoz');
  useEffect(() => {
    console.log('useEffect');
  });
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName("myName")}>Update Name</button>
    </div>
  );
}
