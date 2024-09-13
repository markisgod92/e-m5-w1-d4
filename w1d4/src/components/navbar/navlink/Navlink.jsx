import Nav from 'react-bootstrap/Nav';

export const Navlink = ({href, text}) => {
    return (
        <Nav.Link href={href} className='text-white'>{text}</Nav.Link>
    )
}