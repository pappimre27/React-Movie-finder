import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';


const Movies = () => {
    const movieContext = useContext(MovieContext);

    const { loading, movies } = movieContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="movies-row">
                {movies.map(movie => (
                    <MovieItem key={movie.imdbID} movie={movie} />
                ))}
            </div>
        )
    }
}

export default Movies;
