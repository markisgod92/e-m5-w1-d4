import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { MyNav } from './components/navbar/MyNav'
import { Welcome } from './components/hero/Welcome'
import { MyFooter } from './components/footer/MyFooter'
import { Container, Row, Col } from 'react-bootstrap'
import { CommentArea } from './components/Main/comments/CommentArea'
import { ThemeContext } from './context/Theme'
import { BooksContainer } from './components/Main/BooksContainer'

function App() {
    const { isDarkModeOn } = useContext(ThemeContext)

    return (
        <>
            <MyNav />
            <Welcome />
            <main className={isDarkModeOn ? "bg-dark text-white" : "bg-secondary-subtle"}>
                <Container >
                    <Row>
                        <Col sm md={6}>
                            <BooksContainer />
                        </Col>
                        <Col sm md={6}>
                            <CommentArea />
                        </Col>
                    </Row>
                </Container>
            </main>
            <MyFooter />
        </>
    )
}

export default App
