import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./singleComment.css"

export const SingleComment = ({ author, rate, comment, deleteFunction }) => {
    return (
        <div className="comment-div d-flex flex-column gap-1">
            <div className="d-flex justify-content-between">
                <h6>{author}</h6>
                <ReactStars
                    count={5}
                    size={24}
                    isHalf={false}
                    value={rate}
                    edit={false}
                />
            </div>
            <p>{comment}</p>
            <div className="action-btns d-flex justify-content-end">
                <Button disabled variant="secondary">MODIFY</Button>
                <Button
                    variant="danger"
                    onClick={deleteFunction}
                >
                    DELETE
                </Button>
            </div>
        </div>
    )
}