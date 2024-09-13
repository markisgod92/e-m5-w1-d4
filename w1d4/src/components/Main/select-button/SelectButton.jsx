import Button from 'react-bootstrap/Button';

export const SelectButton = ({text, onClick}) => {
    return (
        <Button variant="primary" onClick={onClick}>{text}</Button>
    )
}