import { GET_NEWS } from '../constants/actionType';

export const getNewsByCategory = (catagory, multiple) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const data = [];
        
        firestore.collection('news').where('type', 'array-contains', catagory).orderBy('release', 'desc').limit(8 * multiple).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() })
            })
            dispatch({ type: GET_NEWS, data })
        })
    }
}

export const addNews = (news) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection('news').add({
            ...news
        }).then(res => {
            console.log(news, res);
        }).catch(err => {
            console.log(err);
        })
    }
}