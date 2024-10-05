import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { CommentArea } from './CommentArea'
import { CommentContextProvider } from '../../../context/CommentContext'
import { ThemeContextProvider } from '../../../context/Theme'

const mockDarkMode = { isDarkModeOn: false }

describe('Test Comment Area', () => {
    it('should contain the section to add comments', () => {
        const { getByText } = render(
            <ThemeContextProvider value={mockDarkMode}>
                <CommentContextProvider>
                    <CommentArea title="title" asin="12345" />
                </CommentContextProvider>
            </ThemeContextProvider>
        )

        const addComment = getByText('Aggiungi un commento')
        expect(addComment).toBeInTheDocument()
    })

    it('should display comments', async () => {
        const mockComments = [
            {
                comment: 'comment 1',
                rate: 1,
                _id: `111`,
                author: 'autore',
                asin: '12345',
            },
            {
                comment: 'comment 2',
                rate: 3,
                _id: `222`,
                author: 'autore',
                asin: '12345',
            },
            {
                comment: 'comment 3',
                rate: 3,
                _id: `333`,
                author: 'autore',
                asin: '12345',
            },
        ]

        window.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockComments),
            })
        )

        const { findAllByText } = render(
            <ThemeContextProvider value={mockDarkMode}>
                <CommentContextProvider value={{ comments: mockComments }}>
                    <CommentArea title="title" asin="12345" />
                </CommentContextProvider>
            </ThemeContextProvider>
        )

        const comments = await findAllByText('autore')

        expect(comments.length).toBe(3)
    })

    it('should say if there are no comments', async () => {
        const mockComments = []

        window.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockComments),
            })
        )

        const { getByText } = render(
            <ThemeContextProvider value={mockDarkMode}>
                <CommentContextProvider value={{ comments: mockComments }}>
                    <CommentArea title="title" asin="12345" />
                </CommentContextProvider>
            </ThemeContextProvider>
        )

        await waitFor(() => {
            const alert = getByText('Non ci sono commenti')
            expect(alert).toBeInTheDocument()
        })
    })

    it('should display error if an error occurred during fetch', async () => {
        window.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')))

        const { findByText } = render(
            <ThemeContextProvider value={mockDarkMode}>
                <CommentContextProvider value={{ isFetchFailed: true }}>
                    <CommentArea title="title" asin="12345" />
                </CommentContextProvider>
            </ThemeContextProvider>
        )

        const errorMessage = await findByText('ERROR!')

        expect(errorMessage).toBeInTheDocument()
    })
})
