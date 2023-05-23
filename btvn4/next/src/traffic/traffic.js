import React, { useState } from "react";
import Light from "../components/light/light";
import "./traffic.css";

export default function Traffic(){
    const [LightOn, setLightOn] = useState("green");

    const nextLight = () => {
        if(LightOn === "green"){
            setLightOn("yellow");
        }else if(LightOn === "yellow"){
            setLightOn("red");
        }else{
            setLightOn("green");
        }
    };

    return(
        
        <div className="traffic-light">
            
                <div><Light color={"red"} isOn={LightOn === "red"}/></div>
                <div><Light color={"yellow"} isOn={LightOn === "yellow"}/></div>
                <div><Light color={"green"} isOn={LightOn === "green"}/></div>
            
            <div>
                <button onClick={nextLight}>Next</button>
            </div>
           
        </div>
      
    );
}