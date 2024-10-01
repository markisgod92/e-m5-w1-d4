import { createContext, useState, useEffect } from 'react'

export const CommentContext = createContext()

export const CommentContextProvider = ({ children }) => {
    const [comments, setComments] = useState([])
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [isFetchFailed, setIsFetchFailed] = useState(false)
    const [selectedAsin, setSelectedAsin] = useState('')

    const API_AUTHORIZATION =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVkM2RhMTI2YjJjOTAwMTU3Mjc2Y2IiLCJpYXQiOjE3MjY4MjM4NDEsImV4cCI6MTcyODAzMzQ0MX0.da4_KxsMRyEgFrkkjKlRREihw0tY6CLYmjShk4uSNz8'

    const getComments = async () => {
        if (!selectedAsin) return

        setIsLoadingComments(true)

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${selectedAsin}/comments/`
            )
            const data = await response.json()
            setComments(data)
        } catch (e) {
            console.error(e)
            setIsFetchFailed(true)
        } finally {
            setIsLoadingComments(false)
        }
    }

    const deleteComment = async (id) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/` + id,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: API_AUTHORIZATION,
                    },
                }
            )
            if (response.ok) {
                setComments(comments.filter((comment) => comment._id !== id))
            }
        } catch (e) {
            console.error(e)
        }
    }

    const modifyComment = async (id, modifiedComment) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/` + id,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: API_AUTHORIZATION,
                    },
                    body: JSON.stringify(modifiedComment),
                }
            )
            if (response.ok) {
                getComments()
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleSelectedAsin = (asin) => {
        if (selectedAsin && selectedAsin === asin) {
            setSelectedAsin('')
        } else {
            setSelectedAsin(asin)
        }
    }

    useEffect(() => {
        getComments()
    }, [selectedAsin])

    return (
        <CommentContext.Provider
            value={{
                comments,
                isLoadingComments,
                isFetchFailed,
                getComments,
                modifyComment,
                deleteComment,
                selectedAsin,
                setSelectedAsin,
                handleSelectedAsin,
            }}
        >
            {children}
        </CommentContext.Provider>
    )
}
