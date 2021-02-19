import { SET_REF } from '../constants/actionType'

const nav = {
    home: false,
    cinema: false,
    showing: false,
    news: false
}

const navReducer = (state = nav, action) => {
    switch (action.type) {
        case SET_REF:
            return { ...state, ...action.data }
        default:
            return state;
    }
}
export default navReducer