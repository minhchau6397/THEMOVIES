import {
    ADD_CINEMA, ERROR_ADD_CINEMA,
    GET_LOCATIONS, ADD_CINEMA_LOCATION, ERROR_ADD_CINEMA_LOCATION
} from '../constants/actionType';


export const getLocation = (idCinema) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        let docs
        firestore.collection(`cinemas/${idCinema}/locations`).get().then(querySnapshot => {
            if (!querySnapshot.empty) {
                docs = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
            } else {
                docs = null;
            }
            dispatch({ type: GET_LOCATIONS, docs, idCinema })
        })
    }
}


export const addCinema = (cinema) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection("cinemas").add({
            ...cinema
        }).then(res => {
            dispatch({ type: ADD_CINEMA, cinema });
        }).catch(err => {
            dispatch({ type: ERROR_ADD_CINEMA, err })
        })
    }
}


export const addLocation = (id, location) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection(`cinemas/${id}/locations`).add({
            ...location
        }).then(res => {
            dispatch({ type: ADD_CINEMA_LOCATION, location });
        }).catch(err => {
            dispatch({ type: ERROR_ADD_CINEMA_LOCATION, err })
        })
    }
}