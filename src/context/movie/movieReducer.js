import {
    SEARCH_MOVIES,
    GET_MOVIE,
    CLEAR_MOVIES,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            }
        case CLEAR_MOVIES:
            return {
                ...state,
                movies: [],
                loading: false
            };
        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        default: return state;
    }
}

