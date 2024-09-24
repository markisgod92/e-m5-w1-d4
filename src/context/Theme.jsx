import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [isDarkModeOn, setDarkModeOn] = useState(false)

    const toggleDarkMode = () => setDarkModeOn(!isDarkModeOn)

    return (
        <ThemeContext.Provider
            value={{isDarkModeOn, toggleDarkMode}}
        >
            {children}
        </ThemeContext.Provider>
    )
}