import { Col, Card, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { CommentContext } from '../../../context/CommentContext'
import { ThemeContext } from '../../../context/Theme'
import { useNavigate } from 'react-router-dom'

export const BookCard = ({ title, img, price, category, asin }) => {
    const { selectedAsin, setSelectedAsin, handleSelectedAsin } =
        useContext(CommentContext)
    const { isDarkModeOn } = useContext(ThemeContext)
    const navigate = useNavigate()

    return (
        <Col sm={selectedAsin ? 4 : 3}>
            <Card
                className={`h-100 ${selectedAsin === asin ? 'border-1 border-danger' : ''} ${isDarkModeOn ? 'bg-dark-subtle' : ''}`}
                onClick={() => handleSelectedAsin(asin)}
            >
                <Card.Img
                    variant="top"
                    src={img}
                    className="p-2 w-100 h-100 img-fluid object-fit-cover"
                />
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
