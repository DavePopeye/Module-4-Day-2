import React from 'react';
import NavBar from './components/MyNav'
import SingleBook from './components/LatestRelease';
import fantasy from "./data/fantasy.json"
import Footer from './components/MyFooter'

function App() {


  return (
    <div className='App'>
      <NavBar />
      {fantasy.map(props => <SingleBook title={props.title} image={props.img} />)}
      <Footer />
    </div>
  );
}

export default App;
