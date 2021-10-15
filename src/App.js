import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, button } from 'react-bootstrap';
import { useState } from 'react';

const apiRoot = "https://localhost:44368/api/Notes";
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(apiRoot)
    .then(response => response.json())
    .then(data=>setNotes(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1>RNote</h1>
      <ul>
        {notes.map(x=><li>{x.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
