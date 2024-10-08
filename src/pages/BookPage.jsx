import { useParams } from 'react-router-dom'
import { NavAndFooterProvider } from '../context/NavAndFooterContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { BookContext } from '../context/BookContext'
import { CommentArea } from '../components/Main/comments/CommentArea'
import { ThemeContext } from '../context/Theme'

export const BookPage = () => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const { asin } = useParams()
    const { books } = useContext(BookContext)
    const [book, setBook] = useState({})

    const getBookData = () => {
        const foundBook = books.find((book) => book.asin === asin)
        setBook(foundBook)
    }

    useEffect(() => {
        getBookData()
    }, [book])

    return (
        <NavAndFooterProvider>
            <main className={isDarkModeOn ? 'bg-dark text-white' : ''}>
                <Container>
                    <Row className="pt-5">
                        {book && (
                            <>
                                <Col sm md={4}>
                                    <img
                                        src={book.img}
                                        alt={book.title}
                                        className="img-fluid object-fit-cover"
                                    />
                                </Col>
                                <Col sm md={8}>
                                    <div className="d-flex flex-column justify-content-between h-100">
                                        <div className="d-flex flex-column gap-3">
                                            <p className="text-end fw-bold">
                                                {book.category}
                                            </p>
                                            <h2>{book.title}</h2>
                                            <p>Asin: {book.asin}</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veniam! Quia, maxime iusto! Molestias voluptas ut nisi illo omnis ipsum ab, blanditiis dolores impedit vel laboriosam repellat, consectetur, architecto iusto aliquid eum delectus error doloribus. Nostrum, fugiat laboriosam commodi vero eveniet voluptas placeat odit ullam dicta itaque numquam, dolorem, vel pariatur perferendis rem. Soluta officia quidem beatae repellendus velit porro.</p>
                                        </div>
                                        <Button variant="success">
                                            Buy for {book.price} €
                                        </Button>
                                    </div>
                                </Col>
                            </>
                        )}
                    </Row>
                    <Row className="pb-5 mb-5">
                        <CommentArea asin={asin} />
                    </Row>
                </Container>
            </main>
        </NavAndFooterProvider>
    )
}
