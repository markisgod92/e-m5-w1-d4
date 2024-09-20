import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CommentList } from './comment list/CommentList';
import { AddComment } from './AddComment';

export const CommentArea = ({asin}) => {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)
      const data = await response.json()
      setComments(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <Col sm lg={8}>
      <Row>
        <CommentList 
          comments={comments}
        />
        <AddComment 
          asin={asin}
        />
      </Row>
    </Col>
  )
}



/*
bject

__v: 0

_id: "66cc7cd9fdee3d00159bdf08"

author: "fffff@gmiual.fom"

comment: "KAKAPO IS THE BEST"

createdAt: "2024-08-26T13:02:17.401Z"

elementId: "0316389706"

rate: 5

updatedAt: "2024-08-26T13:02:17.401Z"

Prototipo Object
*/