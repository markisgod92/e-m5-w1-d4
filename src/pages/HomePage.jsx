import { NavAndFooterProvider } from '../context/NavAndFooterContext'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from '../context/Theme'
import { BooksContainer } from '../components/Main/BooksContainer'
import { Welcome } from '../components/hero/Welcome'
import { useContext, useEffect } from 'react'
import { BookContext } from '../context/BookContext'

export const HomePage = () => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const { getBooks } = useContext(BookContext)

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <NavAndFooterProvider>
            <Welcome />
            <main
                className={
                    isDarkModeOn ? 'bg-dark text-white' : 'bg-secondary-subtle'
                }
            >
                <Container>
                    <Row>
                        <BooksContainer />
                    </Row>
                </Container>
            </main>
        </NavAndFooterProvider>
    )
}
