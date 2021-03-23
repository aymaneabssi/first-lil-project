import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Jumbotron} from 'react-bootstrap';

const Welcom = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Jumbotron  className="d-flex flex-column align-items-center justify-content-center bg-light">
             <h1>Welcom</h1>
            <p>
    lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolorlorem
    lorem ipsum dolor lorem ipsum d lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            </p>
            <p>
    <Button variant="primary">Find out more</Button>
  </p>
</Jumbotron>
        </div>
    )
}

export default Welcom
