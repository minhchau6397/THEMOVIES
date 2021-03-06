import React, { useState, useEffect, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import { dateToString, timestrToSec, formatTime } from '../../utility'
import { getLocation } from '../../redux/actions/cinema_action'
import { getSchedulesByLocation, setSchedulesHome } from '../../redux/actions/schedules_action'
import { setNav } from '../../redux/actions/nav_action'

export const Cinema = (props) => {
    const { cinemas, cinemaData, movies, schedules, nav } = props
    const dispatch = useDispatch();
    const [keyCinema, setKeyCinema] = useState(null);
    const [keyLocation, setKeyLocation] = useState(null);
    const elRef = useRef(null);
    const componentId = 'cinema';


    //--------useEffect
    useEffect(() => {
        if (cinemas) {
            setKeyCinema(Object.keys(cinemas)[0]);
        }
    }, [cinemas])
    useEffect(() => {
        if (keyCinema) {
            dispatch(getLocation(keyCinema));
            dispatch(setSchedulesHome());
            // props.getLocations(keyCinema);
            // props.setSchedulesHome();
        }
    }, [keyCinema, dispatch])
    useEffect(() => {
        if (Object.keys(cinemaData).length > 0) {
            if (cinemaData.locations.length > 0) {
                setKeyLocation(cinemaData.locations[0].id);
            }
        }
    }, [cinemaData])
    useEffect(() => {
        if (keyLocation) {
            dispatch(setSchedulesHome());
            dispatch(getSchedulesByLocation(keyCinema, keyLocation));
        }
    }, [keyLocation, keyCinema, dispatch])
    useEffect(() => {
        if (elRef.current && nav) {
            elRef.current.scrollIntoView({ behavior: 'smooth' });
            dispatch(setNav('cinema', false))
        }
    }, [nav,dispatch])


    //--------Handle click
    const handleClickCinema = (key) => {
        if (keyCinema !== key) {
            setKeyLocation(null)
            setKeyCinema(key);
        }
    }
    const handleClickLocation = (key) => {
        setKeyLocation(key)
    }


    //--------Render jsx
    const renderCinema = () => {
        return Object.keys(cinemas).map((key, index) => {
            const item = cinemas[key];
            return (
                <li key={index} onClick={() => handleClickCinema(key)} className={`cinema-item${(keyCinema === key) ? " active" : ""}`}>
                    <div>
                        <img src={item.image} alt={item.cinema} />
                        <h3>{item.cinema}</h3>
                    </div>
                </li>
            )
        })
    }
    const renderLocation = () => {
        return cinemaData.locations.map((item, index) => (
            <li key={index} onClick={() => handleClickLocation(item.id)} className={`location-item${(keyLocation === item.id) ? " active" : ""}`}>
                <div className="mini-card">
                    <img src={item.thumbnail} alt={`${cinemas[keyCinema].cinema} ${item.name}`} />
                    <div className="card-body">
                        <h3 className="cards-title"><span className={cinemas[keyCinema].className}>{cinemas[keyCinema].cinema}</span> - {item.name}</h3>
                        <div className="address">{item.address}</div>
                    </div>
                </div>
            </li>
        ))
    }
    const renderSchedule = () => {
        return Object.keys(schedules).map((item, index) => {
            let movie = movies[item];
            return (
                <li key={index} className="movie-item">
                    <div className="mini-card">
                        <img src={movie.thumbnail} alt={`${movie.titleVN} - ${movie.titleEN}`} />
                        <div className="card-body">
                            <h3 className="cards-title"><span className="age"><i className={movie.age}>{movie.age}</i></span>{`${movie.titleVN} - ${movie.titleEN}`}</h3>
                            <div className="address">{`${movie.length} phút - ${movie.imdb} imdb`}</div>
                        </div>
                        {Object.keys(schedules[item]).map((type, typeIndex) => (
                            <div key={typeIndex}>
                                <div className="version">{type}</div>
                                <ul className="time-showing-list grid">
                                    {schedules[item][type].map((time, timeIndex) => (
                                        <li key={timeIndex} className="time-showing">
                                            <span className="starting-time">{time}</span><span className="ending-time">{formatTime(timestrToSec(time) + (movie.length * 60))}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </li>
            )
        })
    }
    const renderLoading = () => {
        return <div style={{ textAlign: "center" }}>loading</div>
    }
    const renderEmpty = () => {
        return <div style={{ textAlign: "center" }}>empty content</div>
    }


    return (
        <section id={componentId} ref={elRef}>
            <div className="wrap">
                <div className="line" />
                <div className="main-title">
                    <h2>Cinema</h2>
                </div>
                <div className="body-content">
                    <div className="flex">
                        <ul className="cinema-list custom-scroll">
                            {(cinemas) ? ((Object.keys(cinemas).length > 0) ? renderCinema() : renderEmpty()) : renderLoading()}
                        </ul>
                        <ul className="location-list custom-scroll">
                            {(keyLocation) ? ((cinemaData.locations.length > 0) ? renderLocation() : renderEmpty()) : renderLoading()}
                        </ul>
                        <ul className="movie-list custom-scroll">
                            {(schedules) ? ((Object.keys(schedules).length > 0) ? renderSchedule() : renderEmpty()) : renderLoading()}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    cinemas: state.firestore.data.cinemas,
    movies: state.firestore.data.movies,
    schedules: state.schedules.home,
    cinemaData: state.cinema,
    nav: state.nav.cinema
})

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: "cinemas" },
        { collection: "movies", where: [["isShowing", "==", true], ['expireTime', '>=', dateToString(new Date())]], orderBy: ['expireTime', 'desc'] }
    ])
)(Cinema)