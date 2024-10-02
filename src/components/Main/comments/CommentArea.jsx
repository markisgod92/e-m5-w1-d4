import { Row, Col } from 'react-bootstrap'
import { useContext, useEffect } from 'react'
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
        getComments
    } = useContext(CommentContext)

    useEffect(() => {
        getComments(asin)
    }, [])

    return (
        <>
            <h3 className="mb-5">{title}</h3>
            <Row>
                <AddComment asin={asin} />
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
                        asin={asin}
                        comments={comments}
                    />
                )}
            </Row>
        </>
    )
}
