import {useEffect} from 'react';
import './App.css';
import cineverseLogo from './cineverse.svg';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=94334455';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect( () => {
    searchMovies('Fast and Furious');
  }, [] );
  
  return(
    <div className='app'>

      <div className='header-content'>
        <img className='cineverse-logo' src={cineverseLogo} alt='CineVerse Logo' />
        <h1>CineVerse</h1>
        <img className='cineverse-logo' src={cineverseLogo} alt='CineVerse Logo' />
      </div>

    </div>
  );
}

export default App;