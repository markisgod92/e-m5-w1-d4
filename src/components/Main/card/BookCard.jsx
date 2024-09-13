import { Col } from "react-bootstrap"
import "./bookcard.css"

export const BookCard = ({title, img, price, category}) => {
    return (
        <Col xs={12} md={4} lg={3}>
            <div className="book-card h-100">
                <div className="image-wrapper h-100">
                    <img src={img} alt={title} className="position-relative h-100 w-100 object-fit-cover" />
                </div>
                <div className="book-overlay">
                    <h6 className="fs-4">{title}</h6>
                    <p>{category}</p>
                    <p>{`${price} €`}</p>
                </div>
            </div>
        </Col>
    )
}