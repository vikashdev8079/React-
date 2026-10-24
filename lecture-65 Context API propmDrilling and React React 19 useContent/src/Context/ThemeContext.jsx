import { createContext, useState } from "react";

export let ThemeContext =createContext(null)

export function ThemProvider({children}){
const [them,setTheme] = useState("light")



    return <ThemeContext value={{them,setTheme}}>{children}

    </ThemeContext>
}