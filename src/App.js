import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, button } from 'react-bootstrap';

function App() {
  return (
    <div className="container mt-5">
      <h1>RNote</h1>
      <button className="btn btn-primary">Bir buton</button>
      <Button variant="danger" >Bir buton</Button>
    </div>
  );
}

export default App;
