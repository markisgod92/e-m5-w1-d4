import { Col } from 'react-bootstrap'
import { SingleComment } from './SingleComment'

export const CommentList = ({ asin, comments }) => {
    return (
        <Col>
            <div className="d-flex flex-column">
                <h4>Commenti</h4>
                <hr className="w-100 mb-3" />
                <div className="d-flex flex-column gap-3">
                    {comments.length > 0
                        ? comments.map((comment, i) => (
                              <SingleComment
                                  key={`comment-${i}`}
                                  id={comment._id}
                                  asin={asin}
                                  author={comment.author}
                                  rate={comment.rate}
                                  comment={comment.comment}
                              />
                          ))
                        : 'Non ci sono commenti'}
                </div>
            </div>
        </Col>
    )
}
