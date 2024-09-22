import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Navlink } from './navlink/Navlink.jsx'
import { navlinks } from '../../data/data.js'

export const MyNav = () => {
    return (
        <Navbar expand="lg" className="bg-primary">
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
