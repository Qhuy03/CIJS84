import React from "react";
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
       
        <>
        <h1>Home</h1>
        <ul style={{display: 'flex', justifyContent: 'center'}}>
            <li style={{margin:'20px'}}><Link to="/home/products">Products</Link></li>
            <li style={{margin:'20px'}}><Link to="/home/invoices">Invoices</Link></li>
            <li style={{margin:'20px'}}><Link to="/home/cart">Cart</Link></li>
            <li style={{margin:'20px'}}><Link to="/home/profile">Profile</Link></li>
            <li style={{margin:'20px'}}><Link to="/home/about">About</Link></li>
        </ul>
       
        </>
    );
}

export default Home;