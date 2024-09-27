import { Row, Col } from 'react-bootstrap'
import { useContext, useState } from 'react'
import './bookcard.css'
import { CommentContext } from '../../../context/CommentContext'

export const BookCard = ({
    title,
    img,
    price,
    category,
    asin
}) => {
    const {selectedAsin, setSelectedAsin} = useContext(CommentContext)

    return (
        <Col sm={4}>
            <Row className='h-100'>
                <Col>
                    <div
                        className={`book-card h-100 ${selectedAsin === asin ? 'card-selected' : ''}`}
                        onClick={() => setSelectedAsin(asin)}
                    >
                        <div className="image-wrapper h-100">
                            <img
                                src={img}
                                alt={title}
                                className="position-relative h-100 w-100 object-fit-cover"
                            />
                        </div>
                        <div className="book-overlay">
                            <h6 className="fs-4">{title}</h6>
                            <p>{category}</p>
                            <p>{`${price} €`}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
