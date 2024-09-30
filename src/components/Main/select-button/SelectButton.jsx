import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/Theme'

export const SelectButton = ({ text, onClick }) => {
    const {isDarkModeOn} = useContext(ThemeContext)
    return (
        <Button 
        className='flex-grow-1 rounded-0 border-dark'
        variant="success"
        onClick={onClick}
        >
            {text}
        </Button>
    )
}
