import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [isDarkModeOn, setDarkModeOn] = useState(false)

    console.log(isDarkModeOn)

    return (
        <ThemeContext.Provider value={{ isDarkModeOn, setDarkModeOn }}>
            {children}
        </ThemeContext.Provider>
    )
}
