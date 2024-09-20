import { Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";

export const AddComment = ({ asin, reloadFunction }) => {
    const API_AUTHORIZATION = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVkM2RhMTI2YjJjOTAwMTU3Mjc2Y2IiLCJpYXQiOjE3MjY4MjM4NDEsImV4cCI6MTcyODAzMzQ0MX0.da4_KxsMRyEgFrkkjKlRREihw0tY6CLYmjShk4uSNz8"

    const defaultState = {
        comment: "",
        rate: 0,
        elementId: `${asin}`
    }

    const [userComment, setUserComment] = useState(defaultState)

    const [formAlert, setFormAlert] = useState("")

    const handleInputChange = (e) => {
        setUserComment({
            ...userComment,
            [e.target.name]: e.target.value
        })
    }

    const validateComment = () => {
        return userComment.comment && userComment.rate
    }

    const postComment = async (e) => {
        e.preventDefault()

        if (!validateComment()) {
            setFormAlert("Campi non validi.")
            return
        }

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": API_AUTHORIZATION
                },
                body: JSON.stringify(userComment)
            })
            const data = await response.json()
            setFormAlert("Commento inviato.")
        } catch (e) {
            console.error(e)
            setFormAlert(e)
        } finally {
            reloadFunction()
            setUserComment(defaultState)
        }
    }

    return (
        <Col sm md={6}>
            <div className='d-flex flex-column'>
                <h4>Aggiungi un commento</h4>
                <hr className='w-100 mb-3' />
                <Form
                    onSubmit={(e) => postComment(e)}
                >
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={false}
                        value={userComment.rate || 0}
                        onChange={(newRating => setUserComment({
                            ...userComment,
                            rate: newRating
                        }))}
                    />
                    <Form.Control
                        className='my-4'
                        as='textarea'
                        rows={4}
                        placeholder='Lascia un commento...'
                        name='comment'
                        value={userComment.comment}
                        onChange={(e) => handleInputChange(e)} 
                    />
                    {formAlert && (
                        <div className='text-danger my-3'>{formAlert}</div>
                    )}
                    <Button variant='primary' type='Submit'>Invia</Button>
                </Form>
            </div>
        </Col>
    )
}