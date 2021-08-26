import React ,{useState} from "react";
import AddMovie from './components/AddMovie'
import Button from 'react-bootstrap/Button';
import Header from './components/Header'
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Header />
        <h1 className="wlmv"> Welcome in Our MovieCard</h1>
        <h5 className="wlmv"> Please click on +Add to add a movie in your Watchlist or in Closed to close this</h5>
        <ButtonAddMovie />
      </div>
      <MovieList />
    </div>
  );
}
function ButtonAddMovie() {
  const [show, setShow] = useState(true)
  return (
    <div className='buttonAdd'>
      {
        show ?  null: <AddMovie /> 
      }
      <Button onClick={() => setShow(false)} variant="success">+Add</Button>
      <Button onClick={() => setShow(true)} variant="danger"> Closed </Button>

    </div>
  );
}


export default App;
