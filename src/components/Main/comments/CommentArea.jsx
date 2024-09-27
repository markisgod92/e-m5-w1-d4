import { Row, Col, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { CommentList } from './comment list/CommentList'
import { AddComment } from './AddComment'
import { Loader } from '../../loader/Loader'
import { ErrorDisplay } from '../../error/ErrorDisplay'
import { CommentContext } from '../../../context/CommentContext'

export const CommentArea = ({ title, asin }) => {
    const { comments, isLoadingComments, isFetchFailed, getComments, modifyComment, deleteComment, selectedAsin } = useContext(CommentContext)

    return (
        <>
            <h3 className="mb-5">{title}</h3>
            <Row>
                <AddComment asin={selectedAsin} reloadFunction={getComments} />
            </Row>
            <Row className='mt-5'>
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
                        modifyFunction={modifyComment}
                        deleteFunction={deleteComment}
                    />
                )}
            </Row>
        </>
    )
}
