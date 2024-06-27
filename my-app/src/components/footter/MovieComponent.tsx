import React from 'react';
interface Movie {
    title: string;
    description: string;
    posterUrl: string;
  }
  
const MovieComponent = ({ title, description, posterUrl }: Movie) => {
    return (
      <div className='movie-component'>
        <img className='movie-component-img' src={posterUrl} alt={title} />
        <h3 className='movie-component-title'>{title}</h3>
        <p className='movie-component-description'>{description}</p>
      </div>
    );
  };
export default MovieComponent;