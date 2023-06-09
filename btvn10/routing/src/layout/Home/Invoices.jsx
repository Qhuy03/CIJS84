import React from "react";
import { Link } from "react-router-dom";


const Invoices = ()=>{
    return(
        <button><Link to="/home/invoices/:id">Invoices</Link></button>
    );
}

export default Invoices;