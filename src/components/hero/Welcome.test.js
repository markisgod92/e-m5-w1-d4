import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react"
import { Welcome } from './Welcome'
import { ThemeContextProvider } from '../../context/Theme'
import { BookContextProvider } from '../../context/BookContext'

const mockDarkMode = {isDarkModeOn: false}

describe('Test Welcome Component', () => {
    it('should display welcome message', () => {
        const welcomeText = 'Welcome to Epibooks!'
        const { getByText } = render(
            <ThemeContextProvider value={mockDarkMode}>
                <BookContextProvider>
                    <Welcome />
                </BookContextProvider>
            </ThemeContextProvider>
        )

        const element = getByText(welcomeText)
        expect(element).toBeInTheDocument()
    })

    it('should display a random book image and data', () => {
        const { container, getByText } = render(
            <ThemeContextProvider value={mockDarkMode}>
                <BookContextProvider>
                    <Welcome />
                </BookContextProvider>
            </ThemeContextProvider>
        )

        const image = container.querySelector('img')
        expect(image).toBeInTheDocument()

        const message = getByText('You may like:')
        expect(message).toBeInTheDocument()

        const title = container.querySelector('h3')
        expect(title).toBeInTheDocument()
    })

    it('should display a button that shows an alert', () => {
        const buttonText = /Buy for/i
        const {getByText} = render(
            <ThemeContextProvider value={mockDarkMode}>
                <BookContextProvider>
                    <Welcome />
                </BookContextProvider>
            </ThemeContextProvider>
        )

        const buttonElement = getByText(buttonText)
        expect(buttonElement).toBeInTheDocument()

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        fireEvent.click(buttonElement)
        expect(alertMock).toHaveBeenCalledTimes(1)
        alertMock.mockRestore()
    })
})