import {Container, Row, Col} from 'react-bootstrap';

export const MyFooter = () => {
    return (
        <footer className='bg-primary-subtle fixed-bottom py-3'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='text-center'>
                            © Epibooks 2024 by MG
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}