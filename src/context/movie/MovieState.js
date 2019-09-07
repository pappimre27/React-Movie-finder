import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import {
    SEARCH_MOVIES,
    GET_MOVIE,
    CLEAR_MOVIES,
    SET_LOADING
} from '../types';

let movieClientAPI;

if (process.env.NODE_ENV !== 'production') {
    movieClientAPI = process.env.REACT_APP_MOVIE_API_KEY;
} else {
    movieClientAPI = process.env.MOVIE_API_KEY;
}

const MovieState = props => {
    const initialState = {
        movies: [],
        movie: {},
        loading: false
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    // Search Movies
    const searchMovies = async text => {
        setLoading();

        const res = await axios.get(`https://www.omdbapi.com?s=${text}&apikey=${movieClientAPI}`);

        dispatch({
            type: SEARCH_MOVIES,
            payload: res.data.Search
        });
    };

    //Get movie
    const getMovie = async (id) => {
        setLoading();
        const res = await axios.get(`https://www.omdbapi.com?i=${id}&apikey=${movieClientAPI}`);
        dispatch({
            type: GET_MOVIE,
            payload: res.data
        });
    };

    // Clear movies 
    const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

    // Set Loading

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                movie: state.movie,
                loading: state.loading,
                searchMovies,
                clearMovies,
                getMovie,
                setLoading
            }}
        >
            {props.children}
        </MovieContext.Provider>
    )



}

export default MovieState;


