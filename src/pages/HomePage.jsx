import { NavAndFooterProvider } from '../context/NavAndFooterContext'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from '../context/Theme'
import { BooksContainer } from '../components/Main/BooksContainer'
import { Welcome } from '../components/hero/Welcome'
import { useContext } from 'react'

export const HomePage = () => {
    const { isDarkModeOn } = useContext(ThemeContext)

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
