import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRjNmIwNjY1MDNmNTAwMWE1ODc4OTQiLCJpYXQiOjE3MTA5Njc1MjYsImV4cCI6MTcxMjE3NzEyNn0.h2lFRCXqdspA_x8XmCwKraxnSdhrm-FYnNSRJ64SZEQ',
          },
        }
      )
      if (response.ok) {
        alert('Review is correctly deleted')
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-3" onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>
  )
}

export default SingleComment
