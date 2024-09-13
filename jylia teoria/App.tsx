import React, { useCallback, useEffect, useState } from 'react';
import './components/App.css';
import Header from './components/header';
import Form from './components/Form';
import Fotter from './components/Fotter';
import Movies from './components/Movies';

export type Movie = {
  id: string,
  title: string,
  description: string,
  posterUrl: string
}

export default function App() {
  const [errorText, setErrorText] = useState("")
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    let isIgnore = false;
    setErrorText((_) => "")

    if (searchText.trim().length === 0) {
      return setMovies([]);
    }

    _getMovies(searchText).then((movies) => {
      if (!isIgnore) {
        setMovies(movies)
      }
    }).catch((error) => {
      if (!isIgnore) {
        if (error instanceof Error) {
          setErrorText(error.message)
        }
      }
    })

    return () => { isIgnore = true }
  }, [searchText])

  return (
    <div className="App">
      {errorText.length > 0 ? errorText : null}
      <Movies movies={movies} />
      <Header />
      <Form onSearch={(text) => { setSearchText(text) }} />
      <Fotter />
    </div>
  );
}


async function _searchMovies(title: string): Promise<string[]> {
  const response = await fetch(`https://www.omdbapi.com/?&apikey=24a33c8f&s=${title}`)
  const data = await response.json();

  if (data["Response"] === "False") {
    const maybeErrorMessage = data["Error"]

    if (typeof maybeErrorMessage === 'string' && maybeErrorMessage.trim().length > 0) {
      throw new Error(maybeErrorMessage)
    }

    return [];
  }

  return data['Search'].map((el: any) => el["imdbID"])
}

async function _findMovie(id: string): Promise<Movie> {
  const response = await fetch(`https://www.omdbapi.com/?&apikey=24a33c8f&i=${id}`)
  const data = await response.json();

  if (data["Response"] === "False") {
    const maybeErrorMessage = data["Error"]

    if (typeof maybeErrorMessage === 'string' && maybeErrorMessage.trim().length > 0) {
      throw new Error(maybeErrorMessage)
    }

    throw new Error('Unexpected Error')
  }

  return {
    "id": data["imdbID"],
    "title": data["Title"],
    "description": data["Plot"],
    "posterUrl": data["Poster"],
  }
}

function _mapFoundMoviePromisesResponse(settledResult: PromiseSettledResult<Movie>[]): Movie[] {
  return settledResult.reduce<Movie[]>((result, el) => {
    if (el.status === 'fulfilled') {
      result.push(el.value)
    }

    return result
  }, [])
}

async function _getMovies(title: string): Promise<Movie[]> {
  const foundMovies = await _searchMovies(title);
  const foundMoviePromises = foundMovies.map(movieId => _findMovie(movieId))
  const settledResult = await Promise.allSettled(foundMoviePromises)

  return _mapFoundMoviePromisesResponse(settledResult)
}

