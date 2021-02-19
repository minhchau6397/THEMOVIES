import { ADD_MOVIE } from '../constants/actionType'


export const createMovie = (movie) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore.collection("movies").add({
            ...movie
        }).then(res => {
            console.log(res);
            dispatch({ type: ADD_MOVIE, movie });
        }).catch(err => {
            console.log(err);
        })

    }
}

export const createMovies = (movie) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        
        firestore.collection(`movies`).add({
            ...movie
        }).then(res => {
            console.log(movie, res);
        }).catch(err => {
            console.log(err);
        })
    }
}