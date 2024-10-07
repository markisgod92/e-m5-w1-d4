import { Container, Row, Col, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/Theme'
import { BookContext } from '../../context/BookContext'
import { useNavigate } from 'react-router-dom'
import './hero.css'

export const Welcome = () => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const { allBooks } = useContext(BookContext)
    const [randomBook, setRandomBook] = useState(null)
    const navigate = useNavigate()

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
        <>
            <section className='bg-success text-white pt-5 pb-3 text-center'>
                <h1 className='welcome-title'>Welcome to Epibooks!</h1>
                <p className='pt-3 welcome-message'>LA TUA DESTINAZIONE NUMERO UNO PER LA LETTERATURA</p>
            </section>
            <div className={isDarkModeOn ? 'bg-dark-subtle' : 'bg-white'}>
                <Container>
                    <Row className="py-5">
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
                                        Potrebbe piacerti:
                                    </p>
                                    {randomBook && (
                                        <>
                                            <h3>{randomBook.title}</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod, quos ratione quibusdam placeat inventore, delectus nisi tempore eligendi dolore reiciendis enim earum, voluptates iusto minima impedit. Voluptatem ratione laborum voluptate dicta? Minus nam odio quam itaque corporis pariatur laborum dolorum, impedit consectetur laboriosam eligendi voluptatem ad cupiditate odit, voluptate dicta molestias, alias ut dolor. Quia omnis velit maxime facere.</p>
                                        </>
                                    )}
                                </div>
                                {randomBook && (
                                    <div className='d-flex justify-content-center gap-3'>
                                        <Button variant="success"
                                            onClick={showAlert}
                                            className='px-4 py-2'
                                        >
                                            Buy for {randomBook.price} €
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            onClick={() => navigate(`/book/${randomBook.asin}`)}
                                            className='px-4 py-2'
                                        >
                                            Details
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
