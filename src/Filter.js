import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Filtter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  return (
    <>
      <h1>Filter Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setSearchParams({ name: { name } })}>
        {
          console.log(searchParams.get('name'))
        }
        Set Query params
      </button>
    </>
  );
}

export default Filtter;
