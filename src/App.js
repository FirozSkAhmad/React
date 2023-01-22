import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('firoz');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  });
  return (
    <div>
      <h1>Hello {name} {count}</h1>
      <button onClick={() => {setName('myName');setCount(count)}}>Update Name</button>
    </div>
  );
}
