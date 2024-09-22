import { Container, Row, Col } from 'react-bootstrap'
import './hero.css'

export const Welcome = () => {
    const showAlert = () => {
        alert('...aaand here it is an epic alert.')
    }

    return (
        <div className="hero-div py-5">
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
