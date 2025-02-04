// import React,{} from 'react'

import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let userData = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(userData.data);
    }
    fetchData();
  }, []);
  console.log(users);
  return (
    <div>
      <div className="main">
        <table border={1}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>

          {users.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
