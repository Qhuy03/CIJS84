import React from "react";
import { ThemeContext, useTheme } from "./Context";

const Todolist = ()=>{
    const context = useTheme();
    return(
        <div>
            {context.a};
        </div>
    );
}

export default Todolist;