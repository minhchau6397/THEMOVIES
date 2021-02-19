import { GET_BANNER, GET_BANNER_ERROR } from '../constants/actionType'

export const getBanners = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection('banners').doc('banners').get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                dispatch({ type: GET_BANNER, data })
            }
        }).catch(err => {
            dispatch({ type: GET_BANNER_ERROR, data: err })
        })
    }
}