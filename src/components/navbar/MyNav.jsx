import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Navlink } from './navlink/Navlink.jsx'
import { Form, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { BookContext } from '../../context/BookContext.jsx'
import { ThemeContext } from '../../context/Theme.jsx'
import './nav.css'
import { useNavigate, Link } from 'react-router-dom'
import { DarkModeSwitch } from './dark mode switch/DarkModeSwitch.jsx'
import { Logo } from './logo/Logo.jsx'

export const MyNav = () => {
    const { searchInput, setSearchInput, searchByName } =
        useContext(BookContext)
    const { isDarkModeOn, setDarkModeOn } = useContext(ThemeContext)

    const navigate = useNavigate()

    return (
        <Navbar
            expand="lg"
            {...(isDarkModeOn && { 'data-bs-theme': 'dark' })}
            className={`sticky-top border-bottom border-3 border-success ${isDarkModeOn ? 'bg-dark text-white' : 'bg-white'}`}
        >
            <Container fluid>
                <div className="d-flex justify-content-between flex-grow-1 flex-lg-grow-0 align-items-center">
                    <Link to="/" className="text-decoration-none text-success fw-bold">
                        <Logo />
                    </Link>
                    <div className='d-flex gap-3'>
                        <div className="d-block d-lg-none">
                            <DarkModeSwitch />
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                </div>

                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-lg-1 justify-content-lg-center">
                    <Nav className="mx-auto">
                        <Navlink href="#" text="About Us" />
                        <Navlink href="#" text="Contacts" />
                        <Navlink href="#" text="Privacy Policy" />
                    </Nav>
                </Navbar.Collapse>

                <div className="d-none d-lg-flex align-items-center gap-2">
                    <DarkModeSwitch />
                    <Form className="d-flex gap-2">
                        <Form.Control
                            placeholder="Inserisci un titolo..."
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button
                            variant="success"
                            onClick={() => {
                                searchByName();
                                if (window.location.pathname !== '/') navigate('/');
                            }}
                        >
                            Cerca
                        </Button>
                    </Form>
                </div>

                <div className="d-flex d-lg-none w-100 justify-content-end gap-2 pt-3">
                    <Form className="w-100 d-flex gap-2">
                        <Form.Control
                            placeholder="Inserisci un titolo..."
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button
                            variant="success"
                            onClick={() => {
                                searchByName();
                                if (window.location.pathname !== '/') navigate('/');
                            }}
                        >
                            Cerca
                        </Button>
                    </Form>
                </div>
            </Container>
        </Navbar>
    )
}