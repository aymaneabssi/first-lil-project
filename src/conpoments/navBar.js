import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Navbar,Nav,Form} from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default NavBar
