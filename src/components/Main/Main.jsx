import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { selectors } from '../../data/data'
import { SelectButton } from './select-button/SelectButton'
import { BookCard } from './card/BookCard'

import fantasyBooks from '../../assets/books/fantasy.json'
import historyBooks from '../../assets/books/history.json'
import horrorBooks from '../../assets/books/horror.json'
import romanceBooks from '../../assets/books/romance.json'
import scifiBooks from '../../assets/books/scifi.json'

export const Main = () => {
    const [books, setBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [selectedCard, setSelectedCard] = useState(null)

    const getAllBooks = () => {
        const allBooks = [
            ...fantasyBooks.slice(0, 5),
            ...historyBooks.slice(0, 5),
            ...horrorBooks.slice(0, 5),
            ...romanceBooks.slice(0, 5),
            ...scifiBooks.slice(0, 5),
        ]
        setBooks(allBooks)
    }

    const searchByName = () => {
        const results = books.filter((book) =>
            book.title.toLowerCase().includes(searchInput.trim().toLowerCase())
        )
        setSearchInput('')
        setBooks(results)
    }

    const selectBooks = (genre) => {
        switch (genre) {
            case 'all':
                getAllBooks()
                break
            case 'fantasy':
                setBooks(fantasyBooks.slice(0, 20))
                break
            case 'history':
                setBooks(historyBooks.slice(0, 20))
                break
            case 'horror':
                setBooks(horrorBooks.slice(0, 20))
                break
            case 'romance':
                setBooks(romanceBooks.slice(0, 20))
                break
            case 'scifi':
                setBooks(scifiBooks.slice(0, 20))
                break
            default:
                setBooks([])
        }
    }

    const highlightCard = (id) => {
        setSelectedCard(id)
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    return (
        <main className="mt-5">
            <Container>
                <Row className="my-3">
                    <Col sm>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {selectors.map((select) => (
                                <SelectButton
                                    key={select.id}
                                    text={select.text}
                                    onClick={() =>
                                        selectBooks(select.text.toLowerCase())
                                    }
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <div className="d-flex justify-content-between gap-3">
                        <Form.Control
                            placeholder="Inserisci un titolo..."
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button variant="secondary" onClick={searchByName}>
                            Cerca
                        </Button>
                    </div>
                </Row>
                <Row className="mb-5 g-5">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <BookCard
                                key={book.asin}
                                title={book.title}
                                img={book.img}
                                price={book.price}
                                category={book.category}
                                asin={book.asin}
                                selected={selectedCard === book.asin}
                                handleSelect={highlightCard}
                            />
                        ))
                    ) : (
                        <p>Non ci sono libri.</p>
                    )}
                </Row>
            </Container>
        </main>
    )
}
