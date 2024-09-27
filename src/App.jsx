import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { MyNav } from './components/navbar/MyNav'
import { Welcome } from './components/hero/Welcome'
import { Main } from './components/Main/Main'
import { MyFooter } from './components/footer/MyFooter'
import { Container, Row, Col } from 'react-bootstrap'
import { CommentArea } from './components/Main/comments/CommentArea'
import { ThemeContext } from './context/Theme'

function App() {
    const { isDarkModeOn } = useContext(ThemeContext)

    return (
        <>
            <MyNav />
            <Welcome />
            <main className={isDarkModeOn ? "bg-dark text-white" : ""}>
                <Container >
                    <Row>
                        <Col sm md={6}>
                            <Main />
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
