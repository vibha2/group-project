import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar1 from "./Componenets/Navbar/Navbar.js";
import Navbar2 from "./Componenets/Navbartwo/Navbartwo.js";
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Componenets/Pages/Page1.js';


function App() {
 
  return (
   
    <div className="App">
      <Navbar1 />
      <Router>
          <Navbar2 />
      </Router>
      <Page/>
    </div>
    
  );
}

export default App;
