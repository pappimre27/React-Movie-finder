import React from 'react';
import PropTypes from 'prop-types';
import img from '../layout/no-image-found.jpg';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie: { Poster, Title, imdbID } }) => {
    return (
        <div className="movie">
            {Poster == null ? <img src={img} alt={Title} /> : <img
                src={Poster}
                alt={Title} />}
            <div style={{ maxWidth: '300px' }}>
                <h5 className="movie-title" >{Title}</h5>
                <Link to={`/movie/${imdbID}`} className="details">Details</Link>
            </div>
        </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieItem;
