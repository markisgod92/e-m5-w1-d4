import { Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import { CommentList } from './comment list/CommentList'
import { AddComment } from './AddComment'
import { Loader } from '../../loader/Loader'
import { ErrorDisplay } from '../../error/ErrorDisplay'
import { CommentContext } from '../../../context/CommentContext'

export const CommentArea = ({ title, asin }) => {
    const {
        comments,
        isLoadingComments,
        isFetchFailed,
        selectedAsin,
    } = useContext(CommentContext)

    return (
        <>
            <h3 className="mb-5">{title}</h3>
            <Row>
                <AddComment asin={selectedAsin} />
            </Row>
            <Row className="mt-5">
                {isLoadingComments && !isFetchFailed && (
                    <Col sm>
                        <Loader />
                    </Col>
                )}
                {!isLoadingComments && isFetchFailed && (
                    <Col sm>
                        <ErrorDisplay />
                    </Col>
                )}
                {!isLoadingComments && !isFetchFailed && (
                    <CommentList
                        asin={selectedAsin}
                        comments={comments}
                    />
                )}
            </Row>
        </>
    )
}
