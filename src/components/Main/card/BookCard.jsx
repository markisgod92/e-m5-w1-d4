import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import './bookcard.css'
import { CommentArea } from '../comments/CommentArea'

export const BookCard = ({ title, img, price, category, asin }) => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <Col sm md={isSelected ? 12 : 4} lg={isSelected ? 12 : 3}>
            <Row className="h-100">
                <Col>
                    <div
                        className={`book-card h-100 ${isSelected ? 'card-selected' : ''}`}
                        onClick={() => setIsSelected(!isSelected)}
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
                {isSelected && (
                    <CommentArea
                        asin={asin}
                        title={title}
                        deselectFunction={() => setIsSelected(false)}
                    />
                )}
            </Row>
        </Col>
    )
}
