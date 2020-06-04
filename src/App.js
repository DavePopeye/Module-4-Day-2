import React from 'react';
import NavBar from './components/MyNav'
import SingleBook from './components/SingleBook';
import fantasy from "./data/fantasy.json"
import Footer from './components/MyFooter'
import { Container, Row, Col } from 'react-bootstrap'
import Jumbotron from './components/Jumbtron'



function App() {

  return (
    <div className='App'>
      <NavBar />
      <Jumbotron />
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