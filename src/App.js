import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [intrest, setIntrest] = useState('');
  const [tnc, setTnc] = useState(false);
  const [status, setStatus] = useState(false);
  function getData(e) {
    console.log(name, intrest, tnc);
    e.preventDefault();
  }
  function clear() {
    setName('');
    setIntrest('');
    setTnc(false);
  }
  return (
    <div>
      <h1>Basic Form</h1>
      <form onSubmit={getData}>
        <input
          type="text"
          placeHolder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setIntrest(e.target.value)} value={intrest}>
          <option>--select option--</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br />
        <br />
        <input
          type="checkBox"
          onChange={(e) => setTnc(e.target.checked)}
          value={tnc}
        />
        <span>Accept all terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
}
