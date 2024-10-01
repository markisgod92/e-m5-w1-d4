import { NavAndFooterProvider } from '../context/NavAndFooterContext'
import { Container, Row, Col } from 'react-bootstrap'

export const NotFoundPage = () => {
    return (
        <NavAndFooterProvider>
            <Container className="text-center text-success">
                <Row className="mt-5">
                    <i className="bi bi-emoji-frown fs-1"></i>
                </Row>
                <Row className="mt-3">
                    <h3>Page not found.</h3>
                </Row>
            </Container>
        </NavAndFooterProvider>
    )
}
