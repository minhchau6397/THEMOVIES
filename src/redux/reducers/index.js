import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

import movieReducer from './movie_reducer'
import cinemaReducer from './cinema_reducer'
import scheduleReducer from './schedule_reducer'
import bannerReducer from './banner_reducer';
import newsReducer from './news_reducer'
import navReducer from './nav_reducer'

export const rootReducer = combineReducers(
    {
        firebase: firebaseReducer,
        firestore: firestoreReducer,
        movies: movieReducer,
        cinema: cinemaReducer,
        schedules: scheduleReducer,
        banners: bannerReducer,
        news: newsReducer,
        nav: navReducer
    }
)

export default rootReducer;