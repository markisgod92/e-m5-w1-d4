import Nav from 'react-bootstrap/Nav'
import { ThemeContext } from '../../../context/Theme'
import { useContext } from 'react'

export const Navlink = ({ href, text }) => {
    const {isDarkModeOn} = useContext(ThemeContext)

    return (
        <Nav.Link href={href} className={isDarkModeOn ? "text-white" : ""}>
            {text}
        </Nav.Link>
    )
}
