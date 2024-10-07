import { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from '../../context/Theme'

export const MyFooter = () => {
    const { isDarkModeOn } = useContext(ThemeContext)
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        // Controlla se la pagina è scorsa più di 100px
        const isScrolled = window.scrollY > 100; 
        setShowScrollButton(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup del listener quando il componente si smonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer
            className={`fixed-bottom py-1 ${isDarkModeOn ? 'bg-dark text-success border-top border-3 border-success' : 'bg-success text-white'}`}
        >
            <Container fluid>
                <Row className='align-items-center'>
                    <Col className='p-4'>
                        <div>
                            © Epibooks 2024 by MG
                        </div>
                        </Col>

                        {showScrollButton && (
                            <Col className='text-end'>
                            <button
                                onClick={scrollToTop}
                                className="btn btn-link text-white w-0 fs-1"
                            >
                                <i className="bi bi-arrow-up-short"></i>
                            </button>
                            </Col>
                        )}
                </Row>
            </Container>
        </footer>
    )
}
