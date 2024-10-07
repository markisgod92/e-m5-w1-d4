import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { ThemeContextProvider } from '../../../context/Theme'
import { DarkModeSwitch } from './DarkModeSwitch'

describe('Test Dark Mode Switch', () => {
    it('should toggle Dark Mode', () => {


        const {getByRole} = render(
            <ThemeContextProvider>
                    <DarkModeSwitch />
            </ThemeContextProvider>
        )

        const button = getByRole('button')
        expect(button).toBeInTheDocument()

        const icon = button.querySelector('i')
        expect(icon).toHaveClass('bi-brightness-low')

        fireEvent.click(button)
        expect(icon).toHaveClass('bi-brightness-high')
    })
})