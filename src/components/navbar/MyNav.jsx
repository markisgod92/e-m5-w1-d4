import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Navlink } from './navlink/Navlink.jsx'
import { navlinks } from '../../data/data.js'
import { Form, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { BookContext } from '../../context/BookContext.jsx'
import { ThemeContext } from '../../context/Theme.jsx'
import "./nav.css"

export const MyNav = () => {
    const { searchInput, setSearchInput, searchByName } = useContext(BookContext)
    const { isDarkModeOn, toggleDarkMode } = useContext(ThemeContext)

    return (
        <Navbar expand="lg" className={`border-bottom border-3 border-success ${isDarkModeOn ? "bg-dark text-white" : ""}`}>
            <Container fluid>
                <Navbar.Brand href="#home" className="fs-1 fw-bold text-success">
                    EpiBooks
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
                            variant="success"
                            onClick={searchByName}
                        >
                            Cerca
                        </Button>
                    </Form>
                </Navbar.Collapse>
                <Form.Switch
                    className='ms-3 theme-switch'
                    onClick={toggleDarkMode}
                />
            </Container>
        </Navbar>
    )
}
