import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from '../../context/Theme'

export const MyFooter = () => {
    const {isDarkModeOn} = useContext(ThemeContext)

    return (
        <footer className={`fixed-bottom p-4 ${isDarkModeOn ? "bg-dark text-white" : "bg-primary-subtle"}`}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="text-center">
                            © Epibooks 2024 by MG
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
