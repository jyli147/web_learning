import React, { useState, useEffect } from 'react';
import './components/App.css';
import Header from './components/header';
import Fotter from './components/footter/Fotter';
import Fotter2 from './components/footter/Fotter2';
import Fotter3 from './components/footter/Fotter3';

interface Movie {
  title: string;
  description: string;
  posterUrl: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title: string): Promise<string[]> => {
    const response = await fetch(`https://www.omdbapi.com/?&apikey=24a33c8f&s=${title}`)
    const data = await response.json();
    if (data.Search) {
      return data.Search.map((el: any) => el.imdbID);
    } else {
      return [];
    }
  }

  const getMovie = async (id: string): Promise<Movie> => {
    const response = await fetch(`https://www.omdbapi.com/?&apikey=24a33c8f&i=${id}`);
    const data = await response.json();
    
    return {
      title: data['Title'],
      description: data['Plot'],
      posterUrl: data['Poster'],
    };
    
  };

  const getMovies = async (title: string): Promise<Movie[]> => {
    const result: Movie[] = [];

    const foundMovies = await searchMovies(title);
    for (const movieId of foundMovies) {
      const foundMovie = await getMovie(movieId);
      result.push(foundMovie);
    }

    return result;
  };

  const handleSearch = async () => {
    const foundMovies = await getMovies(searchTerm);
    setMovies(foundMovies);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="App">
      <Header />
      <form className="form">
        <input
          className='input'
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='button' className='form__button' onClick={handleSearch}></button>
      </form>
      <div>
        {movies.length < 0
          ?
          <Fotter />
          :      
          <Fotter2 movies={movies} />
        
        }
              
    </div>
    </div>
  );
}

export default App;