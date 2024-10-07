import { useContext } from "react"
import { ThemeContext } from "../../../context/Theme"
import './darkmodeswitch.css'

export const DarkModeSwitch = () => {
    const { isDarkModeOn, toggleDarkMode } = useContext(ThemeContext)

    return (
        <button
            className="dark-mode-switch"
            onClick={toggleDarkMode}
        >
            {isDarkModeOn ? (
                <i className="bi bi-brightness-high text-white"></i>
            ) : (
                <i className="bi bi-brightness-low text-success"></i>
            )
            }
        </button>
    )
}