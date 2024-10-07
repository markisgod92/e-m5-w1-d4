import { useContext } from "react"
import { ThemeContext } from "../../../context/Theme"
import './logo.css'

export const Logo = () => {
    const { isDarkModeOn } = useContext(ThemeContext)

    return (
        <div className={`logo ${isDarkModeOn ? "text-white" : ""}`}>
            <span className="logo-start">Epi</span>
            <span className="logo-end">Books</span>
        </div>
    )
}