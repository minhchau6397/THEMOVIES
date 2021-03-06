import {
    GET_SCHEDULES, GET_SCHEDULES_ERROR, GET_SCHEDULES_DETAIL
} from '../constants/actionType'

const schedule = {
    home: undefined,
    detail: undefined,
};

const scheduleReducer = (state = schedule, action) => {
    switch (action.type) {
        case GET_SCHEDULES:
            // console.log(action.data);
            return { ...state, ...action.data };
        case GET_SCHEDULES_DETAIL:
            // console.log(action.data);
            return { ...state, ...action.data };
        case GET_SCHEDULES_ERROR:
            console.log(action.err);
            return state;
        default:
            return state;
    }
}

export default scheduleReducer;