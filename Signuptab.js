import React, { useEffect, useState } from 'react'
import axios from "axios"

function Signtab() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadusers();
    },[])

    const loadusers = async () => {
        const result = await axios.get("http://localhost:8083/showuser");
        console.log(result.data);
        setUsers(result.data);
    }

  return (
    <div>
    <table border={1}>
      <thead>
        <tr>
          <th>NAME</th>
          <th>MOBILE</th>
          <th>EMAIL</th>
          <th>PAN CARD</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.sid}>
            <td>{user.name}</td>
            <td>{user.phno}</td>
            <td>{user.email}</td>
            <td>{user.pan}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  
    </div>
  )
}

export default Signtab;