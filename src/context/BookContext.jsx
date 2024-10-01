import { createContext, useState, useEffect } from 'react'

import fantasyBooks from '../assets/books/fantasy.json'
import historyBooks from '../assets/books/history.json'
import horrorBooks from '../assets/books/horror.json'
import romanceBooks from '../assets/books/romance.json'
import scifiBooks from '../assets/books/scifi.json'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const getAllBooks = () => {
        const allBooks = [
            ...fantasyBooks.slice(0, 5),
            ...historyBooks.slice(0, 5),
            ...horrorBooks.slice(0, 5),
            ...romanceBooks.slice(0, 5),
            ...scifiBooks.slice(0, 5),
        ]
        setBooks(allBooks)
    }

    const selectBooks = (genre) => {
        switch (genre) {
            case 'all':
                getAllBooks()
                break
            case 'fantasy':
                setBooks(fantasyBooks.slice(0, 20))
                break
            case 'history':
                setBooks(historyBooks.slice(0, 20))
                break
            case 'horror':
                setBooks(horrorBooks.slice(0, 20))
                break
            case 'romance':
                setBooks(romanceBooks.slice(0, 20))
                break
            case 'scifi':
                setBooks(scifiBooks.slice(0, 20))
                break
            default:
                setBooks([])
        }
    }

    const searchByName = () => {
        if (searchInput) {
            const results = books.filter((book) =>
                book.title
                    .toLowerCase()
                    .includes(searchInput.trim().toLowerCase())
            )
            setBooks(results)
        } else {
            getAllBooks()
        }
        setSearchInput('')
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    return (
        <BookContext.Provider
            value={{
                books,
                setBooks,
                searchInput,
                setSearchInput,
                searchByName,
                selectBooks,
            }}
        >
            {children}
        </BookContext.Provider>
    )
}
