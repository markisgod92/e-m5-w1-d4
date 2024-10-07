import { createContext, useState, useEffect, useContext } from 'react'

import fantasyBooks from '../assets/books/fantasy.json'
import historyBooks from '../assets/books/history.json'
import horrorBooks from '../assets/books/horror.json'
import romanceBooks from '../assets/books/romance.json'
import scifiBooks from '../assets/books/scifi.json'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
    const [allBooks, setAllBooks] = useState([
        ...fantasyBooks.slice(0, 20),
        ...historyBooks.slice(0, 20),
        ...horrorBooks.slice(0, 20),
        ...romanceBooks.slice(0, 20),
        ...scifiBooks.slice(0, 20),
    ])
    const [books, setBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const getBooks = () => {
        setBooks(allBooks)
    }

    const selectBooks = (genre) => {
        switch (genre) {
            case 'all':
                getBooks()
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
            getBooks()
        }
        setSearchInput('')
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <BookContext.Provider
            value={{
                allBooks,
                books,
                getBooks,
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

export const useBookContext = () => {
    return useContext(BookContext)
}
