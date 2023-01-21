import React from 'react';
import './style.css';

// const names = ['divya', 'pooja', 'sonali', 'shabiya'];

const details = [
  { name: 'divya', email: 'divya@gmail.com' },
  { name: 'divya', email: 'divya@gmail.com' },
  { name: 'divya', email: 'divya@gmail.com' },
];

export default function App() {
  return (
    <div className="App">
      {/* {names.map((name, id) => (
        <h2 key={id}>My Name is:{name}</h2>
      ))} */}
      <table border="1">
        <thead >
          <tr>
            <td>name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {details.map((data, id) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
