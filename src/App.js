import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('firoz');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
  });
  function multiCount() {
    console.log("multiCount")
    return count * 2;
  }
  return (
    <div>
      <h1>
        Hello {name} {count}
      </h1>
      <h2>{multiCount()}</h2>
      <button
        onClick={() => {
          setName('myName');
          setCount(count);
        }}
      >
        Update Name
      </button>
    </div>
  );
}
