import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
    <Router>
   
      <Routes>
        <Route path="/" Component={Signup} />
        <Route path="/Home" Component={Home} />
        <Route path="/About" Component={About}/>
        <Route path="/Contact" Component={Contact}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
