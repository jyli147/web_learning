import { Fragment } from 'react/jsx-runtime';
import { Movie } from '../App';

type MoviesProps = {
    movies: Movie[]
}

export default function Movies(props: MoviesProps) {
    return <Fragment>
        {
            props.movies.map(movie => <h1 key={movie.id}>{movie.title}</h1>)
        }
    </Fragment>
}