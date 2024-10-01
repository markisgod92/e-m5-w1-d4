import { NavAndFooterProvider } from '../context/NavAndFooterContext'
import { Container, Row, Col } from 'react-bootstrap'
import { CommentArea } from '../components/Main/comments/CommentArea'
import { ThemeContext } from '../context/Theme'
import { BooksContainer } from '../components/Main/BooksContainer'
import { CommentContext } from '../context/CommentContext'
import { Welcome } from '../components/hero/Welcome'
import { useContext } from 'react'

export const HomePage = () => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const { selectedAsin } = useContext(CommentContext)

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
                        <Col sm md={selectedAsin ? 8 : 12}>
                            <BooksContainer />
                        </Col>
                        {selectedAsin && (
                            <Col sm md={4}>
                                <CommentArea />
                            </Col>
                        )}
                    </Row>
                </Container>
            </main>
        </NavAndFooterProvider>
    )
}
