import React from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import ChildTable from './Table.js';

// const names = ['divya', 'pooja', 'sonali', 'shabiya'];

const details = [
  {
    name: 'divya',
    email: 'divya@gmail.com',
    address: [{ Hn: 44, city: 'attili' }],
  },
  {
    name: 'divya',
    email: 'divya@gmail.com',
    address: [{ Hn: 44, city: 'attili' }],
  },
  {
    name: 'divya',
    email: 'divya@gmail.com',
    address: [{ Hn: 44, city: 'attili' }],
  },
];

export default function App() {
  function Alert(data) {
    alert(data);
  }
  return (
    <div className="App">
      {/* {names.map((name, id) => (
        <h2 key={id}>My Name is:{name}</h2>
      ))} */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>email</td>
            <td>address</td>
          </tr>
        </thead>
        <tbody>
          {details.map((data, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table striped bordered hover variant="dark">
                  <tbody>
                    {data.address.map((item, id) => (
                      <tr key={id}>
                        <ChildTable data={item} fn={Alert} />
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
