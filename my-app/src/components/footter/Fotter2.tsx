import React from 'react';
import MovieComponent from './MovieComponent';
import { Movie } from '../../App';

  
function Fotter2(props: { movies: Movie[] }) {
    if(props.movies.length <= 0) {
      return null
    }

    return (
      <div className='movies'>
        {props.movies.map((movie) => (
          <MovieComponent
            key={movie.id}
            title={movie.title}
            description={movie.description}
            posterUrl={movie.posterUrl}
          />
        ))}
      </div>
      
    );
  }
export default Fotter2;