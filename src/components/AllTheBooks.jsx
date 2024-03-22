
import { Col, Row, } from 'react-bootstrap'
import horror from '../data/horror.json'
import SingleBook from './SingleBook'

const AllTheBooks = ({ searchQuery }) => {

  return (
    <>
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
