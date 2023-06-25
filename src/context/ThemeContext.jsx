import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [mode,setMode] =useState(localStorage.getItem('colorMode'));

    return(
        <ThemeContext.Provider value={[mode,setMode]}>{children}</ThemeContext.Provider>
    )
}