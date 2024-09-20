export const SingleComment = ({author, rate, comment}) => {
    return (
        <div className="d-flex flex-column gap-1">
            <div className="d-flex justify-content-between">
                <h6>{author}</h6>
                <p className="fw-bold">{rate}</p>
            </div>
            <p>{comment}</p>
        </div>
    )
}