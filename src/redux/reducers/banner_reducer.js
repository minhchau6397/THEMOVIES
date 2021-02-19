import { GET_BANNER, GET_BANNER_ERROR } from '../constants/actionType'

const banners = [];

const bannerReducer = (state = banners, action) => {
    switch (action.type) {
        case GET_BANNER:
            return [...JSON.parse(action.data.banners).banner]
        case GET_BANNER_ERROR:
            console.log(action.data);
            
            return state
        default:
            return state;
    }
}

export default bannerReducer;