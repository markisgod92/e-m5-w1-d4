import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { Welcome } from './Welcome'
import { ThemeContextProvider } from '../../context/Theme'
import { BookContextProvider } from '../../context/BookContext'
import { MemoryRouter } from 'react-router-dom'

const mockDarkMode = { isDarkModeOn: false }

describe('Test Welcome Component', () => {
    it('should display welcome message', () => {
        const welcomeText = 'Welcome to Epibooks!'
        const { getByText } = render(
            <MemoryRouter>
                <ThemeContextProvider value={mockDarkMode}>
                    <BookContextProvider>
                        <Welcome />
                    </BookContextProvider>
                </ThemeContextProvider>
            </MemoryRouter>
        )

        const element = getByText(welcomeText)
        expect(element).toBeInTheDocument()
    })

    it('should display a random book image and data', () => {
        const { container, getByText } = render(
            <MemoryRouter>
                <ThemeContextProvider value={mockDarkMode}>
                    <BookContextProvider>
                        <Welcome />
                    </BookContextProvider>
                </ThemeContextProvider>
            </MemoryRouter>
        )

        const image = container.querySelector('img')
        expect(image).toBeInTheDocument()

        const message = getByText('Potrebbe piacerti:')
        expect(message).toBeInTheDocument()

        const title = container.querySelector('h3')
        expect(title).toBeInTheDocument()
    })

    it('should display a button that shows an alert', () => {
        const buttonText = /Buy for/i
        const { getByText } = render(
            <MemoryRouter>
                <ThemeContextProvider value={mockDarkMode}>
                    <BookContextProvider>
                        <Welcome />
                    </BookContextProvider>
                </ThemeContextProvider>
            </MemoryRouter>
        )

        const buttonElement = getByText(buttonText)
        expect(buttonElement).toBeInTheDocument()

        const alertMock = jest
            .spyOn(window, 'alert')
            .mockImplementation(() => { })
        fireEvent.click(buttonElement)
        expect(alertMock).toHaveBeenCalledTimes(1)
        alertMock.mockRestore()
    })
})
