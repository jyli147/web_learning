import React, { useState, useEffect } from 'react';
import './components/App.css';
import Header from './components/header';
import Fotter from './components/footter/Fotter';
import Form from './components/form/Form';
import { text } from 'node:stream/consumers';
import  {  DNA  }  from  'react-loader-spinner' 

export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [didRequest, setDidRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      id: data['imdbID'],
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
     setIsLoading(true);
     setDidRequest(true);
    try {
        const foundMovies = await getMovies(searchTerm);
      setMovies(foundMovies);
    } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
    } finally {
        setIsLoading(false);
      }
   };
  
  useEffect(() => {
    handleSearch();
    return () => {}
  }, [searchTerm]);



  return (
    <div className="App">
      <Header />
      <Form onSearch={(value) => { setSearchTerm(value) }} />
      <Fotter movies={movies} didRequest={didRequest} isLoading={isLoading} />
    </div>
  );
}

export default App;