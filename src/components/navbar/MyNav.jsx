import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Navlink } from './navlink/Navlink.jsx'
import { Form, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { BookContext } from '../../context/BookContext.jsx'
import { ThemeContext } from '../../context/Theme.jsx'
import './nav.css'
import { useNavigate } from 'react-router-dom'
import { CommentContext } from '../../context/CommentContext.jsx'

export const MyNav = () => {
    const { searchInput, setSearchInput, searchByName } =
        useContext(BookContext)
    const { isDarkModeOn, setDarkModeOn } = useContext(ThemeContext)
    const {setSelectedAsin} = useContext(CommentContext)

    const toggleDarkMode = (e) => {
        setDarkModeOn(e.target.checked)
    }
    
    const navigate = useNavigate()

    return (
        <Navbar
            expand="lg"
            className={`border-bottom border-3 border-success ${isDarkModeOn ? 'bg-dark text-white' : ''}`}
        >
            <Container fluid>
                <Navbar.Brand href="/" className="fs-1 fw-bold text-success">
                    EpiBooks
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Navlink href="#" text="About Us" />
                        <Navlink href="#" text="Contacts" />
                        <Navlink href="#" text="Privacy Policy" />
                    </Nav>
                    <Form className="d-flex gap-2">
                        <Form.Control
                            placeholder="Inserisci un titolo..."
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button variant="success" onClick={() => {
                            searchByName()
                            // if not on home, open home and reset asin
                            if (window.location.pathname !== '/') {
                                setSelectedAsin("")
                                navigate('/')
                            }
                        }}>
                            Cerca
                        </Button>
                    </Form>
                </Navbar.Collapse>
                <Form.Switch
                    className="ms-3 theme-switch"
                    checked={isDarkModeOn}
                    onChange={toggleDarkMode}
                />
            </Container>
        </Navbar>
    )
}
