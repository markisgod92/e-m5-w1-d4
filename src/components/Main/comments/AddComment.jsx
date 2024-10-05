import { Col, Button, Form } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { CommentContext } from '../../../context/CommentContext'

export const AddComment = ({ asin }) => {
    const {getComments} = useContext(CommentContext)

    const API_AUTHORIZATION =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzAxOTJiYTBmMzg1MDAwMTUxYzE3YzEiLCJpYXQiOjE3MjgxNTYzNDYsImV4cCI6MTcyOTM2NTk0Nn0.4qRgeoTdncpu6cktu9LRV1OwTrDtF5Ed0VSJ8-F98Zs'

    const defaultState = {
        comment: '',
        rate: 0,
        elementId: `${asin}`,
    }

    const [userComment, setUserComment] = useState(defaultState)
    const [starsCount, setStarsCount] = useState(0)
    const [formAlert, setFormAlert] = useState('')

    const handleInputChange = (e) => {
        setUserComment({
            ...userComment,
            [e.target.name]: e.target.value,
        })
    }

    const validateComment = () => {
        return userComment.comment && userComment.rate && userComment.elementId === asin
    }

    const postComment = async (e) => {
        e.preventDefault()

        if (!validateComment()) {
            setFormAlert('Campi non validi.')
            return
        }

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: API_AUTHORIZATION,
                    },
                    body: JSON.stringify(userComment),
                }
            )

            if (response.ok) setFormAlert('Commento inviato.')
        } catch (e) {
            setFormAlert(e)
        } finally {
            getComments(asin)
            setUserComment(defaultState)
        }
    }

    useEffect(() => {
        setStarsCount(prev => (prev + 1))
    }, [userComment.rate])

    return (
        <Col>
            <div className="d-flex flex-column">
                <h4>Aggiungi un commento</h4>
                <hr className="w-100 mb-3" />
                <Form onSubmit={(e) => postComment(e)}>
                    <ReactStars
                        key={starsCount}
                        count={5}
                        size={24}
                        isHalf={false}
                        value={userComment.rate || 0}
                        onChange={(newRating) =>
                            setUserComment({
                                ...userComment,
                                rate: newRating,
                            })
                        }
                    />
                    <Form.Control
                        className="my-4"
                        as="textarea"
                        rows={4}
                        placeholder="Lascia un commento..."
                        name="comment"
                        value={userComment.comment}
                        onChange={(e) => handleInputChange(e)}
                    />
                    {formAlert && (
                        <div className="text-success my-3">{formAlert}</div>
                    )}
                    <Button variant="success" type="Submit" disabled={!asin}>
                        Invia
                    </Button>
                </Form>
            </div>
        </Col>
    )
}
