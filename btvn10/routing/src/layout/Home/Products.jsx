import React from "react";
import { Link } from "react-router-dom";


const Products = ()=>{
    return(
        <button><Link to="/home/products/:id">Products</Link></button>
    );
}

export default Products;