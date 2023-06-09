import React, {useContext, useState, createContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({childrent}) => {
    const a =2;
    const value = {a:a};

    return(
        <ThemeContext.Provider value={value}>
            {childrent}
        </ThemeContext.Provider>
    );
};

const useTheme = ()=> {
    const context = useContext(ThemeContext);
    if(typeof context === "undefined"){
        throw new Error("useTheme must be used with a ThemeProvider");
    }
    return context;
};

export {useTheme, ThemeContext};