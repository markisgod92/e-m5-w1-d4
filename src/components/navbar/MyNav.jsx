import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Navlink } from './navlink/Navlink.jsx'
import { navlinks } from '../../data/data.js'
import { Form, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { BookContext } from '../../context/BookContext.jsx'
import { ThemeContext } from '../../context/Theme.jsx'

export const MyNav = () => {
    const { searchInput, setSearchInput, searchByName } = useContext(BookContext)
    const { isDarkModeOn, toggleDarkMode } = useContext(ThemeContext)

    return (
        <Navbar expand="lg" className={isDarkModeOn ? "bg-dark" : "bg-primary"}>
            <Container fluid>
                <Navbar.Brand href="#home" className="text-white">
                    Epibooks
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navlinks.map((link) => (
                            <Navlink
                                key={link.id}
                                href={link.href}
                                text={link.text}
                            />
                        ))}
                    </Nav>
                    <Form className='d-flex gap-2'>
                        <Form.Control
                            placeholder="Inserisci un titolo..."
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button
                            variant="danger"
                            onClick={searchByName}
                        >
                            Cerca
                        </Button>
                    </Form>
                </Navbar.Collapse>
                <Button
                    variant={isDarkModeOn ? "dark" : "primary"}
                    onClick={toggleDarkMode}
                >
                    <i className={`bi ${!isDarkModeOn ? "bi-toggle-off" : "bi-toggle-on"} fs-3`}></i>
                </Button>
            </Container>
        </Navbar>
    )
}
