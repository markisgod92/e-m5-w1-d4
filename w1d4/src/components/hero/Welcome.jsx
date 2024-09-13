import {Container, Row, Col} from 'react-bootstrap';

export const Welcome = () => {
    const showAlert = () => {
        alert("...aaand here it is an alert.")
    }

    return (
        <div className='bg-danger-subtle py-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h1>Welcome to Epibooks!</h1>
                            <p>Click on the button below to see an alert.</p>
                            <button 
                                onClick={showAlert}
                                className='btn btn-danger rounded-5 mt-5'>
                                    The Button Below
                            </button>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}