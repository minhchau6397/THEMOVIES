import {
    ADD_CINEMA, ERROR_ADD_CINEMA,
    GET_LOCATIONS, ADD_CINEMA_LOCATION, ERROR_ADD_CINEMA_LOCATION
} from '../constants/actionType'

const data = {}
const cinemaReducer = (state = data, action) => {
    switch (action.type) {
        case ADD_CINEMA:
            console.log(action.cinema);
            return state;
        case ERROR_ADD_CINEMA:
            console.log(action.err);
            return state;

        case GET_LOCATIONS:
            // console.log(action.docs);
            return {...state, cinema: action.idCinema, locations: [...action.docs]};
        case ADD_CINEMA_LOCATION:
            console.log(action.location);
            return state;
        case ERROR_ADD_CINEMA_LOCATION:
            console.log(action.err);
            return state;

        default:
            return state;
    }
}
export default cinemaReducer;