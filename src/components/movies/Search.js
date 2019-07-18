import React, { useState, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';




const Search = () => {
    const movieContext = useContext(MovieContext);
    const alertContext = useContext(AlertContext);


    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            movieContext.searchMovies(text);
            setText('');
        }
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="inputs">
            <h1>Search for movies</h1>
            <form onSubmit={onSubmit} className="search">
                <input
                    type="text"
                    name="text"
                    value={text}
                    id="input-search"
                    placeholder="Search..."
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    id="search-btn" />
                {movieContext.movies.length > 0 &&
                    <input type="button"
                        value="Clear"
                        className="btn btn-light"
                        onClick={movieContext.clearMovies} />}
            </form>
        </div>
    )
}

export default Search;
