import React from "react";
import {Link} from "react-router-dom";


const Auth = ()=>{
    return(
       
        <>
        <h1>Auth</h1>
        <ul style={{display: 'flex', justifyContent: 'center'}}>
            <li style={{margin:'20px'}}><Link to="/auth/login">Login</Link></li>
            <li style={{margin:'20px'}}><Link to="/auth/register">Register</Link></li>
        </ul>
       
        </>
    );
}

export default Auth;