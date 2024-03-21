import { useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? '6px solid green' : 'none' }}
      >
        <Card.Img src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  )
}

export default SingleBook
