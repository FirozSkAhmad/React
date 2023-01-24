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

  const [uID, setuId] = useState(null)
  const [uname, setuName] = useState("")
  const [uemail, setuEmail] = useState("")
  const [umobile, setuMobile] = useState("")
  function update(item) {
    setuId(item.id)
    setuName(item.name)
    setuEmail(item.email)
    setuMobile(item.mobile)
  }

  function updateDetails(e) {
    const id = uID
    const data = { name: uname, email: uemail, mobile: umobile }
    console.log(data)
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'PUT',
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
                <td>
                  <button onClick={() => remove(item.id)}>Delete</button>
                  <button onClick={() => update(item)}>Update</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>

      <h1>Update data</h1>
      <form onSubmit={updateDetails}>
        <input type="text" name="name" value={uname} placeholder="Name" onChange={(e) => setuName(e.target.value)} />
        <input type="text" name="email" value={uemail} placeholder="Email" onChange={(e) => setuEmail(e.target.value)} />
        <input type="text" name="mobile" value={umobile} placeholder="Mobile" onChange={(e) => setuMobile(e.target.value)}/>
        <button type='submit'>Update</button>
      </form>
    </>
  )
}
