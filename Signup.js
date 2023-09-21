import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signtab from './Signuptab';
import './loginstyle.css'
import axios from 'axios';
const Signup = () => {
  const [name, setName] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [panno, setPANNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  
  const history=useNavigate();
  const handleNext = () => {
       history("/home"); 
  }

    const handleSignup = (e) =>{
      e.preventDefault();
      axios.post('http://127.0.0.1:8083/adduser',
      {
      name:name,
      phno:mobileno,
      pan:panno,
      email:email,
      password:password,
      npass:cpassword
    }
      )
  };

  return (
    <div id='signup'>
    
    <h2>Sign Up</h2>
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
      type="long"
      placeholder="Mobile Number"
      value={mobileno}
      onChange={(e) => setMobileno(e.target.value)}
    />
    <br></br>
    <input
    type="String"
    placeholder="PAN Number"
    value={panno}
    onChange={(e) => setPANNo(e.target.value)}
  />
  <br></br>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="Confirm Password"
        value={cpassword}
        onChange={(e) => setCPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleNext}>Next</button>
      <Signtab/>
    </div>
  );
};

export default Signup;
