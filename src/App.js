import './App.css';
import NavBar from './conpoments/navBar'
import Welcom from './conpoments/Welcom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardGroup} from 'react-bootstrap';
import Data from './data.json';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcom/>
      <div className="posts">
        
      <CardGroup/>
  {
          Data.map(book=>{
            return (
          <Card>
          <Card.Img variant="top" src={book.img} style={{ width: '10rem' }}/>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              price: {book.price}€ <br/>
              category: {book.category}
            </Card.Text>
          </Card.Body>
        </Card>
            )})}          
         <CardGroup/>
            

        
      </div>
    </div>
  );
}

export default App;
