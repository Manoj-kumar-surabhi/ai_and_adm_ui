import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./react_files/nav_bar_fixed";
import Home from './react_files/home';
import About from "./react_files/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;