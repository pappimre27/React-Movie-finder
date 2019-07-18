import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import MovieContext from '../../context/movie/movieContext';

const Movie = ({ match }) => {

    const movieContext = useContext(MovieContext);

    const { getMovie, loading, movie } = movieContext;

    useEffect(() => {
        getMovie(match.params.id);
        // eslint-disable-next-line
    }, []);

    const {
        imdbID,
        Poster,
        Title,
        Genre,
        Released,
        Rated,
        imdbRating,
        Director,
        Writer,
        Actors,
        Plot
    } = movie;

    if (loading) return <Spinner />

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 " style={{
                        backgroundImage: `url(${Poster})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%'
                    }}>
                    </div>
                    <div className="col-md-8" style={{ width: '100%' }}>
                        <h2 style={{ color: '#fff' }}>{Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Genre:</strong> {Genre}</li>
                            <li className="list-group-item"><strong>Released:</strong> {Released}</li>
                            <li className="list-group-item"><strong>Rated:</strong> {Rated}</li>
                            <li className="list-group-item"><strong>IMDB Rating:</strong> {imdbRating}</li>
                            <li className="list-group-item"><strong>Director:</strong> {Director}</li>
                            <li className="list-group-item"><strong>Writer:</strong> {Writer}</li>
                            <li className="list-group-item"><strong>Actors:</strong> {Actors}</li>
                            <li className="list-group-item"><strong>
                                <h3 style={{ color: '#333' }}>Plot</h3>:</strong> {Plot}
                            </li>
                        </ul>

                        <a href={`http://imdb.com/title/${imdbID}`} className="btn btn-primary">View IMDB</a>
                        <Link to="/" className="btn btn-primary">Go Back To Search</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Movie
