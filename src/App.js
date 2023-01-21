import React from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';

// const names = ['divya', 'pooja', 'sonali', 'shabiya'];

const details = [
  { name: 'divya', email: 'divya@gmail.com',contact:111 },
  { name: 'divya', email: 'divya@gmail.com',contact:111 },
  { name: 'divya', email: 'divya@gmail.com',contact:111 }
];

export default function App() {
  return (
    <div className="App">
      {/* {names.map((name, id) => (
        <h2 key={id}>My Name is:{name}</h2>
      ))} */}
      <Table striped bordered hover variant="dark">
        <thead >
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>email</td>
            <td>contact</td>
          </tr>
        </thead>
        <tbody>
          {details.map((data, id) => (
            <tr key={id}>
              <td>{id+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
