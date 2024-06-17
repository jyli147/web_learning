import React from 'react';
interface Movie {
    title: string;
    description: string;
    posterUrl: string;
  }
  
const MovieComponent = ({ title, description, posterUrl }: Movie) => {
    return (
      <div>
        <img src={posterUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
export default MovieComponent;