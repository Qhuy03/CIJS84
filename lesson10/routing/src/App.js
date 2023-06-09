import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />  
        <Route path="*" element={<h1>Page not found</h1>} />      
      </Routes>

    </div>
  );
}

export default App;
