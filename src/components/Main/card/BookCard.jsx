import { Col, Card, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/Theme'
import { useNavigate } from 'react-router-dom'
import './bookcard.css'

export const BookCard = ({ title, img, price, category, asin }) => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const navigate = useNavigate()

    return (
        <Col sm={3}>
            <Card className={`h-100 ${isDarkModeOn ? 'bg-dark-subtle' : ''}`}>
                <div className='p-2 bookcard-img'>
                <Card.Img
                    variant="top"
                    src={img}
                    alt={title}
                />
                </div>
                
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{category}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" className="w-100 mb-1" disabled>
                        Buy for {price} €
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-100"
                        onClick={() => navigate(`/book/${asin}`)}
                    >
                        Details
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}
