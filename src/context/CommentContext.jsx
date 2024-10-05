import { createContext, useState, useEffect } from 'react'

export const CommentContext = createContext()

export const CommentContextProvider = ({ children }) => {
    const [comments, setComments] = useState([])
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [isFetchFailed, setIsFetchFailed] = useState(false)
    const [isDeleteFailed, setDeleteFailed] = useState(false)
    const [isModifyFailed, setModifyFailed] = useState(false)

    const API_AUTHORIZATION =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzAxOTJiYTBmMzg1MDAwMTUxYzE3YzEiLCJpYXQiOjE3MjgxNTYzNDYsImV4cCI6MTcyOTM2NTk0Nn0.4qRgeoTdncpu6cktu9LRV1OwTrDtF5Ed0VSJ8-F98Zs'

    const getComments = async (asin) => {
        if (!asin) return

        setIsLoadingComments(true)

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
            )
            const data = await response.json()
            setComments(data)
        } catch (error) {
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
            setDeleteFailed(true)
        }
    }

    const modifyComment = async (asin, id, modifiedComment) => {
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
                getComments(asin)
            }
        } catch (error) {
            setModifyFailed(true)
        }
    }

    return (
        <CommentContext.Provider
            value={{
                comments,
                isLoadingComments,
                isFetchFailed,
                getComments,
                modifyComment,
                deleteComment,
                isModifyFailed,
                isDeleteFailed,
            }}
        >
            {children}
        </CommentContext.Provider>
    )
}
