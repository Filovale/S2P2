import { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import horror from '../data/horror.json'
import SingleBook from './SingleBook'

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control type="search" placeholder="Search something" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        {horror
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book) => {
            return (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook book={book} />
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default AllTheBooks
