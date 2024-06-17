import React from 'react';
import MovieComponent from './MovieComponent';


interface Movie {
    title: string,
    description: string,
    posterUrl: string
}
  
function Fotter2(props: { movies: Movie[] }) {
    return (
      <div>
        {props.movies.map((movie) => (
          <MovieComponent
            key={movie.title}
            title={movie.title}
            description={movie.description}
            posterUrl={movie.posterUrl}
          />
        ))}
      </div>
    );
  }
export default Fotter2;