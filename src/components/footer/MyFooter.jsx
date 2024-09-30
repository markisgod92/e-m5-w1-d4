import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from '../../context/Theme'

export const MyFooter = () => {
    const {isDarkModeOn} = useContext(ThemeContext)

    return (
        <footer className={`fixed-bottom p-4 ${isDarkModeOn ? "bg-dark text-success border-top border-3 border-success" : "bg-success text-white"}`}>
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
