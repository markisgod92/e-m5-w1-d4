import { Container, Row, Col, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/Theme'
import { BookContext } from '../../context/BookContext'
import './hero.css'

export const Welcome = () => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const { allBooks } = useContext(BookContext)
    const [randomBook, setRandomBook] = useState(null)

    const getRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * allBooks.length)
        setRandomBook(allBooks.at(randomIndex))
    }

    const showAlert = () => {
        alert('You ordered 384 copies of the book successfully.')
    }

    useEffect(() => {
        if (allBooks.length > 1 && !randomBook) getRandomBook()
    }, [allBooks])

    return (
        <div className={isDarkModeOn ? 'bg-dark-subtle' : 'bg-white'}>
            <Container>
                <Row className="py-5 text-center">
                    <h1>Welcome to Epibooks!</h1>
                </Row>
                <Row className="pb-5">
                    <Col sm md={6}>
                        <div className="d-flex justify-content-center justify-content-md-end pe-md-5">
                            {randomBook && (
                                <img
                                    src={randomBook.img}
                                    alt={randomBook.title}
                                    className="random-book-img img-fluid object-fit-cover"
                                />
                            )}
                        </div>
                    </Col>
                    <Col sm md={6}>
                        <div className="h-100 d-flex flex-column justify-content-between gap-5 py-0 py-md-5 mt-3 mt-md-0">
                            <div className="d-flex flex-column gap-3">
                                <p className="fw-bold text-center">
                                    You may like:
                                </p>
                                {randomBook && <h3>{randomBook.title}</h3>}
                            </div>
                            {randomBook && (
                                <Button variant="success" onClick={showAlert}>
                                    Buy for {randomBook.price} €
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
