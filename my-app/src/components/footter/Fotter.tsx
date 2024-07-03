import React from 'react';
import Fotter2 from './Fotter2';
import { Movie } from '../../App';
import  {  DNA  }  from  'react-loader-spinner' 


type FotterProps = {
    didRequest: boolean,
    isLoading: boolean,
    movies: Movie[],
}

const Fotter = (props: FotterProps) => {
  
    return (
        <div>
            {props.didRequest===false? <h1>Найдется любой фильм</h1>: <h1></h1>}
            {props.isLoading ? <DNA /> : null }
            {props.movies.length > 0 ? <Fotter2 movies={props.movies} /> :
            <h1 style={{ textAlign: 'center' }}>К сожалению, ничего не найдено</h1>}
        </div>
    );
};

export default Fotter;