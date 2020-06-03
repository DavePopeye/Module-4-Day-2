import React from 'react';
import NavBar from './components/MyNav'
import SingleBook from './components/SingleBook';
import fantasy from "./data/fantasy.json"
import Footer from './components/MyFooter'
import { Container, Row, Col } from 'react-bootstrap'

function App() {


  return (
    <div className='App'>
      <NavBar />
      <Container fluid>
        <Row>
          <SingleBook books={fantasy} />
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App; 
