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
        
             
  {
          Data.map(book=>{
            return (
          <Card>
          <Card.Img variant="top" src={book.img} style={{ width: '10rem' }}/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
            )})}          
         
            

        
      </div>
    </div>
  );
}

export default App;
