import {useEffect, useState} from 'react';
import './App.css';
import cineverseLogo from './cineverse.svg';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=94334455';

const movie1 = {
  "Title": "The Fast and the Furious: Tokyo Drift",
  "Year": "2006",
  "imdbID": "tt0463985",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect( () => {
    searchMovies('Spiderman');
  }, [] );
  
  return(
    <div className='app'>

      <div className='header-content'>
        <img className='cineverse-logo' src={cineverseLogo} alt='CineVerse Logo' />
        <h1>CineVerse</h1>
        <img className='cineverse-logo' src={cineverseLogo} alt='CineVerse Logo' />
      </div>

      <div className='search'>
        <input
          placeholder='Αναζήτηση ταινιών'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={searchIcon} 
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? //if
        (
          <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
        ) 
        : //else
        (
          <div className='empty'>
            <h2>No movies found!</h2>
          </div>
        )
      }
      

    </div>
  );
}

export default App;