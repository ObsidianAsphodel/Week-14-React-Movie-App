import { useEffect, useState } from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';

const url = 'http://www.omdbapi.com?apikey=868e331a';

function App() {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
  searchMovies('Pokemon')
  }, []);
  return (
   <>
    <div className='container-fluid'>
      <h1 id="title">Week 14 Movie App</h1>
      <div className='container'>
        <div className='row'>
       
        {movies.map((movie) => {
          return (
            <MovieList
            key={movie.imdbID} 
            year={movie.Year}
            title={movie.Title}
            poster={movie.Poster}
            />
          )
          })
        }
      </div>)
      </div>   
    </div>
   </>
  );
}

export default App;
