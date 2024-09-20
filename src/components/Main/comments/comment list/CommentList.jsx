import { Container, Row, Col, Button } from 'react-bootstrap';
import { SingleComment } from './SingleComment';

export const CommentList = ({ comments }) => {
    return (
        <Col sm md={6}>
            <div className='d-flex flex-column overflow-scroll'>
                <h4>Commenti</h4>
                <hr className='w-100 mb-3'/>
                <div className='d-flex flex-column gap-3 pe-5'>
                    {comments.length > 0 ? (
                        comments.map((comment, i) => (
                            <SingleComment
                                key={`comment-${i}`}
                                author={comment.author}
                                rate={comment.rate}
                                comment={comment.comment}
                            />
                        ))
                    ) : (
                        "Non ci sono commenti"
                    )}
                </div>
            </div>

        </Col>
    )
}