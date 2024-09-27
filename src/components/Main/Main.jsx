import { useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { selectors } from '../../data/data'
import { SelectButton } from './select-button/SelectButton'
import { BookCard } from './card/BookCard'
import { BookContext } from '../../context/BookContext'
import { ThemeContext } from '../../context/Theme'



export const Main = () => {
    const {isDarkModeOn} = useContext(ThemeContext)
    const {books, selectBooks} = useContext(BookContext)

    const highlightCard = (id) => {
        setSelectedCard(id)
    }

    return (
        <main className={`pt-3 pb-5 ${isDarkModeOn ? "bg-dark text-white" : ""}`}>
            <Container>
                <Row className="mb-5">
                    <Col sm>
                        <div className="d-flex">
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
                <Row className="pb-5 g-5">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <BookCard
                                key={book.asin}
                                title={book.title}
                                img={book.img}
                                price={book.price}
                                category={book.category}
                                asin={book.asin}
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
