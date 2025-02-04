// import React,{} from 'react'

import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  // const UserData = "https://jsonplaceholder.typicode.com/users";

  const [users, setUser] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const user = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(user.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
        {users.map((elem, index) => {
          console.log(elem);

          return (
            <tr key={index}>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.address.city}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
