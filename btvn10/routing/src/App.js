import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Auth from './layout/Auth/Auth';
import Login from './layout/Auth/Login';
import Register from './layout/Auth/Register';
import Home from './layout/Home/Home';
import Products from './layout/Home/Products';
import Id from './layout/Home/id';
import Invoices from './layout/Home/Invoices';
import Cart from './layout/Home/Cart';
import Profile from './layout/Home/Profile';
import About from './layout/Home/About';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <div>
        <ul style={{display: 'flex', justifyContent: 'center'}}>
          <li style={{margin:'20px'}}><Link to="/auth">Auth</Link></li>
          <li style={{margin:'20px'}}><Link to="/">Home</Link></li>
        </ul>
      </div>
        <Routes>
          <Route path='/auth' element={<Auth/>} />
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/auth/register" element={<Register/>} />

          <Route path='/' element={<Home/>} />
            <Route path="/home/products" element={<Products/>} />  
              <Route path='/home/products/:id' element={<Id/>} />

            <Route path="/home/invoices" element={<Invoices/>} />  
              <Route path='/home/invoices/:id' element={<Id/>} />

            <Route path="/home/cart" element={<Cart/>} /> 
            <Route path="/home/profile" element={<Profile/>} /> 
            <Route path="/home/about" element={<About/>} /> 
        </Routes>
      </>
    </div>
  );
}

export default App;
