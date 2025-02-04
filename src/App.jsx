import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from "axios"
import "./App.css"

const App = () => {

  const [user,setUser]=useState([])

  useEffect(()=>{
    async function fetchData() {
      let Data = await Axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(Data.data)
    }
    fetchData()
  },[])
  
console.log(user);

  return (
    <div className='main'>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
        {user.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default App
