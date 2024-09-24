import { Container, Row, Col } from 'react-bootstrap'
import './hero.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme'

export const Welcome = () => {
    const {isDarkModeOn} = useContext(ThemeContext)

    const showAlert = () => {
        alert('...aaand here it is an epic alert.')
    }

    return (
        <div className={`hero-div py-5 ${isDarkModeOn ? "hero-dark" : "hero-light"}`}>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <h1>Welcome to Epibooks!</h1>
                            <p>
                                Click on the button below to see an epic alert.
                            </p>
                            <button
                                onClick={showAlert}
                                className="btn btn-primary rounded-5 mt-5"
                            >
                                The Button Below
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
