import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeContextProvider } from '../../context/Theme'
import { BookContextProvider, useBookContext } from '../../context/BookContext'
import { MemoryRouter } from 'react-router-dom'
import { BooksContainer } from './BooksContainer'

describe('Test Books Container', () => {
    it('should render the right number of cards', () => {
        const { getAllByRole } = render(
            <MemoryRouter>
                <ThemeContextProvider>
                    <BookContextProvider>
                        <BooksContainer />
                    </BookContextProvider>
                </ThemeContextProvider>
            </MemoryRouter>
        )

        const cards = getAllByRole('img')
        expect(cards.length).toBe(100)
    })
})
