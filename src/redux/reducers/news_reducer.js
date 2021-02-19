import { GET_NEWS } from '../constants/actionType'

const news = []

const newsReducer = (state = news, action) => {
    switch (action.type) {
        case GET_NEWS:
            return [...action.data ]
        default:
            return state;
    }
}
export default newsReducer