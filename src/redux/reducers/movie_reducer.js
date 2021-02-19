import {ADD_MOVIE} from '../constants/actionType'

const movies = [];

const movieReducer = (state = movies, action) => {
    switch (action.type) {
        case ADD_MOVIE: 
            return [...state, action.movie]
        default:
            return [...state]
    }
};

export default movieReducer;
