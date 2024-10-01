import { Row, Col, Card, Button } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CommentContext } from '../../../context/CommentContext'
import { ThemeContext } from '../../../context/Theme'
import "./bookcard.css"

export const BookCard = ({
    title,
    img,
    price,
    category,
    asin
}) => {
    const { selectedAsin, handleSelectedAsin } = useContext(CommentContext)
    const {isDarkModeOn} = useContext(ThemeContext)

    return (
        <Col sm={selectedAsin ? 4 : 3}>
            <Card 
                className={`h-100 ${selectedAsin === asin ? "border-1 border-danger" : ""} ${isDarkModeOn ? "bg-dark-subtle" : ""}`}
                onClick={() => handleSelectedAsin(asin)}    
            >
                <Card.Img
                    variant='top'
                    src={img}
                    className='p-2 book-card-img w-100 h-100 img-fluid object-fit-cover'
                />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{category}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant='success'
                        className='w-100 mb-1'
                    >
                        Buy for {price} €
                    </Button>
                    <Button
                        variant='secondary'
                        className='w-100'
                    >
                        Details
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}
