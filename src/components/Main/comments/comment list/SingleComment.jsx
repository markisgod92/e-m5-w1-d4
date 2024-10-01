import { Button, Form } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './singleComment.css'
import { useContext, useState } from 'react'
import { CommentContext } from '../../../../context/CommentContext'

export const SingleComment = ({
    asin,
    id,
    author,
    rate,
    comment,
}) => {
    const [isModifyOn, setIsModifyOn] = useState(false)
    const {modifyComment, deleteComment} = useContext(CommentContext)

    const originalComment = {
        comment: comment,
        rate: rate,
        elementId: `${asin}`,
    }

    const [userComment, setUserComment] = useState(originalComment)

    const handleInputChange = (e) => {
        setUserComment({
            ...userComment,
            [e.target.name]: e.target.value,
        })
    }

    const validateComment = () => {
        return (
            userComment.comment &&
            userComment.rate &&
            (userComment.comment !== originalComment.comment ||
                userComment.rate !== originalComment.rate)
        )
    }

    return (
        <>
            <div className="comment-div p-1 d-flex flex-column gap-1">
                <div className="d-flex justify-content-between">
                    <h6>{author}</h6>
                    <ReactStars
                        key={
                            isModifyOn ? `editable-${asin}` : `readonly-${asin}`
                        }
                        count={5}
                        size={24}
                        isHalf={false}
                        value={userComment.rate}
                        edit={isModifyOn}
                        onChange={(newRating) =>
                            setUserComment({
                                ...userComment,
                                rate: newRating,
                            })
                        }
                    />
                </div>
                {isModifyOn ? (
                    <>
                        <Form.Control
                            className="my-4"
                            as="textarea"
                            name="comment"
                            value={userComment.comment}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <div className="d-flex justify-content-center gap-1">
                            <Button
                                variant="danger"
                                onClick={() => {
                                    setIsModifyOn(false)
                                    setUserComment(originalComment)
                                }}
                            >
                                Annulla
                            </Button>
                            <Button
                                variant="success"
                                disabled={!validateComment()}
                                onClick={() => modifyComment(id, userComment)}
                            >
                                Modifica
                            </Button>
                        </div>
                    </>
                ) : (
                    <p>{comment}</p>
                )}

                {!isModifyOn && (
                    <div className="action-btns d-flex justify-content-end gap-1">
                        <Button
                            variant="secondary"
                            onClick={() => setIsModifyOn(true)}
                        >
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button variant="danger" onClick={() => deleteComment(id)}>
                            <i className="bi bi-trash"></i>
                        </Button>
                    </div>
                )}
            </div>
        </>
    )
}
