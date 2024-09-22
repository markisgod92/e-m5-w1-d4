import { Row, Col, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { CommentList } from './comment list/CommentList'
import { AddComment } from './AddComment'
import { Loader } from '../../loader/Loader'
import { ErrorDisplay } from '../../error/ErrorDisplay'

export const CommentArea = ({ title, asin, deselectFunction }) => {
    const API_AUTHORIZATION =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVkM2RhMTI2YjJjOTAwMTU3Mjc2Y2IiLCJpYXQiOjE3MjY4MjM4NDEsImV4cCI6MTcyODAzMzQ0MX0.da4_KxsMRyEgFrkkjKlRREihw0tY6CLYmjShk4uSNz8'

    const [comments, setComments] = useState([])
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [isFetchFailed, setIsFetchFailed] = useState(false)

    const getComments = async () => {
        setIsLoadingComments(true)

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
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

    useEffect(() => {
        getComments()
    }, [])

    return (
        <Col sm lg={8}>
            <div className="d-flex align-items-baseline justify-content-between">
                <h3 className="mb-5">{title}</h3>
                <Button variant="outline-danger" onClick={deselectFunction}>
                    X
                </Button>
            </div>

            <Row>
                {isLoadingComments && !isFetchFailed && (
                    <Col sm md={6}>
                        <Loader />
                    </Col>
                )}
                {!isLoadingComments && isFetchFailed && (
                    <Col sm md={6}>
                        <ErrorDisplay />
                    </Col>
                )}
                {!isLoadingComments && !isFetchFailed && (
                    <CommentList
                        asin={asin}
                        comments={comments}
                        modifyFunction={modifyComment}
                        deleteFunction={deleteComment}
                    />
                )}
                <AddComment asin={asin} reloadFunction={getComments} />
            </Row>
        </Col>
    )
}
