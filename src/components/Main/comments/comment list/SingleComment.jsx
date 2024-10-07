import { Button, Form } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './singleComment.css'
import { useContext, useEffect, useState } from 'react'
import { CommentContext } from '../../../../context/CommentContext'

export const SingleComment = ({ asin, id, author, rate, comment }) => {
    const [isModifyOn, setIsModifyOn] = useState(false)
    const [deleteError, setDeleteError] = useState(false)
    const [modifyError, setModifyError] = useState(false)
    const { modifyComment, deleteComment } = useContext(CommentContext)

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

    const handleModifyComment = async () => {
        try {
            await modifyComment(asin, id, userComment);
            setModifyError(false);
        } catch (error) {
            setModifyError(true);
        }
    };

    const handleDeleteComment = async () => {
        try {
            await deleteComment(id);
            setDeleteError(false);
        } catch (error) {
            setDeleteError(true);
        }
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
                        <div className="d-flex flex-wrap justify-content-center gap-1">
                            {modifyError && (
                                <span className="w-100 text-center pb-3 text-danger">
                                    Failed to modify comment. Try again.
                                </span>
                            )}
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
                                onClick={handleModifyComment}
                            >
                                Modifica
                            </Button>
                        </div>
                    </>
                ) : (
                    <p className='comment-line'>{comment}</p>
                )}

                {!isModifyOn && (
                    <div className="action-btns d-flex justify-content-end gap-4 align-items-center">
                        {deleteError && (
                            <div className="delete-fail">
                                Error deleting comment. Try again.
                            </div>
                        )}
                        <div className='d-flex justify-content-end gap-1'>
                            <Button
                                variant="secondary"
                                onClick={() => setIsModifyOn(true)}
                            >
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button
                                variant="danger"
                                onClick={handleDeleteComment}
                            >
                                <i className="bi bi-trash"></i>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
