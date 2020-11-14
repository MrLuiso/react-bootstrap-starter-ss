import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function HeroBanner() {
  return (
    <Jumbotron>
      <h1>Taller React Sembrando Sentido Hackathon</h1>
      <p>
        This is a basic react app with bootstrap components.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default HeroBanner
