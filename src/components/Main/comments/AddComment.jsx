import { Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";

export const AddComment = ({ asin }) => {
    const API_AUTHORIZATION = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVkM2RhMTI2YjJjOTAwMTU3Mjc2Y2IiLCJpYXQiOjE3MjY4MjM4NDEsImV4cCI6MTcyODAzMzQ0MX0.da4_KxsMRyEgFrkkjKlRREihw0tY6CLYmjShk4uSNz8"

    const [userComment, setUserComment] = useState({
        comment: "",
        rate: 0,
        elementId: `${asin}`
    })

    console.log(userComment)

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
        if (!validateComment()) return;

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
            console.log(data)
        } catch (e) {
            console.error(e)
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
                    {/* <Form.Select
                        className='mb-3'
                        name="rate"
                        id="rate"
                        value={userComment.rate || ""}
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value="">Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select> */}
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
                    <Form.Group className='mb-3'>
                        <Form.Label>Commento</Form.Label>
                        <Form.Control
                            type='textarea'
                            placeholder='Lascia un commento...'
                            name='comment'
                            value={userComment.comment}
                            onChange={(e) => handleInputChange(e)} />
                    </Form.Group>
                    <Button variant='primary' type='Submit'>Invia</Button>
                </Form>
            </div>
        </Col>
    )
}