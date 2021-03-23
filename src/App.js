import './App.css';
import NavBar from './conpoments/navBar'
import Welcom from './conpoments/Welcom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import Data from './data.json';
import Footer from './conpoments/footer';
import EllipsisText from "react-ellipsis-text";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcom/>
      <div className="posts">
      <Container>
        <Row>
          {Data.map((data) => (
            <Col xs={4} sm={4} md={3} lg={2}>
            <Card style={{ width: "10rem" ,height: "auto"}} className="my-3 d-flex justify-content-between">
              <Card.Img style={{ width: "10rem", height: "15rem" }} variant="top" src={data.img} />
              <Card.Body>
                <Card.Title><EllipsisText text={data.title} length={"15"} /></Card.Title>
                <Card.Text>{data.price} €</Card.Text>
                <Button variant="primary">BUY!</Button>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default App;
