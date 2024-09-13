import Nav from 'react-bootstrap/Nav';

export const Navlink = ({href, text}) => {
    return (
        <Nav.Link href={href}>{text}</Nav.Link>
    )
}