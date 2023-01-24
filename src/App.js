import React, { useEffect, useState } from 'react';
import './style.css';
import { Table } from 'react-bootstrap'

export default function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers()
  }, [])
  // fetch('http://localhost:4000/todo')//Get method
  //   .then((result) => {
  //     result.json().then((resp) => console.log(resp))
  //   })

  function getUsers() {
    fetch('http://localhost:4000/todo').then((result) => {
      result.json().then((resp) => {
        setUsers(resp)
      })
    })
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  function getDetails(e) {
    console.log({ name, email, mobile })
    const data = { name, email, mobile }
    fetch('http://localhost:4000/todo',//POST Method
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((result) => result.json().then((res) => {
        console.log(res)
        getUsers()
      }))
    e.preventDefault()
  }

  function remove(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => result.json().then((res) => {
      console.log(res)
      getUsers()
    }))

  }
  return (
    <>
      <h1>Post API</h1>
      <form onSubmit={getDetails}>
        <input type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name="mobile" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <h1>Data</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, id) =>
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td><button onClick={() => remove(item.id)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}
