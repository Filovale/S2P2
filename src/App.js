import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav/MyNav'
import MyFooter from './components/MyFooter/MyFooter'
import Welcome from './components/Welcome/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

function App() {
  
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Container>
        <Welcome />
        <AllTheBooks searchQuery={searchQuery}/>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
