import '@testing-library/jest-dom'
import { MemoryRouter} from 'react-router-dom'
import { ThemeContextProvider } from '../../../context/Theme'
import { render } from '@testing-library/react'
import { BookCard } from './BookCard'

const mockDarkMode = { isDarkModeOn: false }

describe('Test Book Card component', () => {
    it('should render card with passed props', () => {
        const { getByText, getByRole } = render(
            <MemoryRouter>
                <ThemeContextProvider value={mockDarkMode}>
                    <BookCard 
                        title='Book Title'
                        img='https://picsum.photos/200/300'
                        price={9.99}
                        category='testCategory'
                        asin={12345}
                    />
                </ThemeContextProvider>
            </MemoryRouter>
        )

        const title = getByText('Book Title')
        const img = getByRole('img')
        const price = getByText(/9.99/i)
        const category = getByText('testCategory')
        const detailsBtn = getByText('Details')

        expect(title).toBeInTheDocument()
        expect(img).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(category).toBeInTheDocument()
        expect(detailsBtn).toBeInTheDocument()
    })
})