import { Navbar, Nav , Form , Container } from 'react-bootstrap'

const MyNav = ({ searchQuery, setSearchQuery }) => (
  <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">EpiBooooooooooooks</Navbar.Brand>
      <Nav className="ms-auto">
          <Form.Group>
            <Form.Control type="search" placeholder="Cerca un libro" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </Form.Group>
      </Nav>
    </Container>
  </Navbar>
)

export default MyNav
