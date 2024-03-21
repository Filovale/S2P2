import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRjNmIwNjY1MDNmNTAwMWE1ODc4OTQiLCJpYXQiOjE3MTA5Njc1MjYsImV4cCI6MTcxMjE3NzEyNn0.h2lFRCXqdspA_x8XmCwKraxnSdhrm-FYnNSRJ64SZEQ',
          },
        }
      )
      if (response.ok) {
        alert('Review sent correctly')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Review</Form.Label>
          <Form.Control type="text" placeholder="Write something" value={comment.comment} onChange={(e) => setComment({...comment, comment: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Vote</Form.Label>
          <Form.Control as="select" value={comment.rate} onChange={(e) => setComment({...comment, rate: e.target.value})}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default AddComment
