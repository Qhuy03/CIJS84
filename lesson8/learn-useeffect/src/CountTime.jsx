import React, { useEffect, useState } from "react";

const CountTime = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
    const auto = setInterval(()=>{
        setCount(count=> count + 1);
    },1000)

    return ()=>{
        clearInterval(auto);
    };

}, []);
    
    return(
        <div>
            <h1>Time: {count}</h1>
        </div>
    );
};
export default CountTime;