import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

import Schedule from '../../components/Schedule'
import Header from '../../components/movie/Header';
import Infomation from '../../components/movie/Infomation'
import Cinema from '../../components/movie/Cinema';

import { getSchedulesByMovie } from '../../redux/actions/schedules_action'

import { dateToString, useWindowDimension, formatTime, timestrToSec } from '../../utility'


export const MovieDetail = (props) => {
    const { movie, cinemas, schedules, locations } = props;
    const { windowWidth } = useWindowDimension();
    const navList = ["Lịch chiếu", "Thông tin"];
    const movieId = props.match.params.id;
    const isMobile = (windowWidth <= 620) ? true : false;

    const [currentCinema, setCurrentCinema] = useState(null);
    const [navIndex, setNavIndex] = useState(0);
    const [currentDate, setCurrentDate] = useState(dateToString(new Date()));
    const [toggle, setToggle] = useState({});

    useEffect(() => {
        if (schedules) {
            let array = {}
            Object.keys(schedules).forEach(item => {
                array = { ...array, [item]: false };
            })
            setToggle(state => ({ ...state, ...array }))
        }
    }, [schedules])
    useEffect(() => {
        if (movie) {
            props.getSchedules(movieId)
        }
    }, [movie])
    useEffect(() => {
        if (cinemas) {
            setCurrentCinema(Object.keys(cinemas)[0]);
        }
    }, [cinemas])
    useEffect(() => {
        document.documentElement.scrollIntoView()
    }, [])

    const handleNavIndext = (index) => {
        setNavIndex(index);
    }
    const handleSetDate = (date) => {
        setCurrentDate(date);
    }
    const handleSetCinema = (cinema) => {
        setCurrentCinema(cinema)
    }


    const renderListDateMobile = () => {
        let content = []
        let weekday = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
        for (let i = 0; i < 8; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i);
            let stringDate = dateToString(date);
            let hadSchedule = false;
            if (schedules) {
                Object.keys(schedules).forEach(item => {
                    if (schedules[item] && schedules[item][stringDate]) {
                        hadSchedule = true;
                    }
                })
            }
            content.push(
                <li key={i} onClick={() => handleSetDate(stringDate)} className={((hadSchedule) ? "loaded" : "") + ((stringDate === currentDate) ? " active" : "")}>
                    <span className="day">{weekday[date.getDay()]}</span>
                    <span className="day">{date.getDate()}</span>
                </li>
            )
        }
        return content;
    }
    const renderCinemaMobile = () => {
        let count = 0;
        let content = []
        content = Object.keys(schedules).map((item, indexItem) => {
            if (schedules[item] && schedules[item][currentDate]) {
                count++;
                let schedule = schedules[item][currentDate];
                let cinema = cinemas[item];
                return (
                    <li key={indexItem} className="cinema-item">
                        <div className="wraps" onClick={() => setToggle(state => ({ ...state, [item]: !state[item] }))}>
                            <img src={cinema.image} alt={cinema.cinema} />
                            <h3>{cinema.cinema}</h3>
                            <span className="icon-ctrl" />
                        </div>
                        <ul className={`movie-list${(toggle[item]) ? " active" : ""}`}>
                            {
                                Object.keys(schedule).map((name, key) => {
                                    let type = schedule[name];
                                    let location = locations[name]
                                    return (
                                        <li key={key} className="movie-item">
                                            <div className="mini-card">
                                                <img src={location.thumbnail} alt={`${cinema.cinema} - ${location.name}`} />
                                                <div className="card-body">
                                                    <h3 className="cards-title">{location.name}</h3>
                                                    <div className="address">{location.address}</div>
                                                </div>
                                                {
                                                    Object.keys(type).map((typeName, typeKey) => {
                                                        return (
                                                            <React.Fragment key={typeKey}>
                                                                <div className="version">{typeName}</div>
                                                                <ul className="time-showing-list grid">
                                                                    {
                                                                        type[typeName].map((time, timeKey) => {
                                                                            return (
                                                                                <li key={timeKey} className="time-showing">
                                                                                    <span className="starting-time">{time}</span><span className="ending-time">{formatTime(timestrToSec(time) + (movie.length * 60))}</span>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                )
            }
        })
        if (count > 0) {
            return content
        } else {
            return renderEmpty();
        }
    }
    const renderMobile = () => {
        return (
            <div id="showtimes" className={`${(navIndex === 0) ? "collapse-show " : ""}collapse`}>
                <div className="movie-detail">
                    <div className="grid">
                        <div className="schedule">
                            <ul className="list-date">
                                {renderListDateMobile()}
                            </ul>
                        </div>
                        <ul className="list-cinema">
                            {(schedules !== null) ? (schedules !== undefined && currentCinema) ? renderCinemaMobile() : renderLoading() : renderEmpty()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    const renderListDate = () => {
        let content = []
        let weekday = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
        for (let i = 0; i < 8; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i);
            let stringDate = dateToString(date);
            let hadSchedule = false;
            if (schedules && schedules[currentCinema] && schedules[currentCinema][stringDate]) {
                hadSchedule = true;
            }
            content.push(
                <li key={i} onClick={() => handleSetDate(stringDate)} className={((hadSchedule) ? "loaded" : "") + ((stringDate === currentDate) ? " active" : "")}>
                    <span className="day">{weekday[date.getDay()]}</span>
                    <span className="day">{date.getDate()}</span>
                </li>
            )
        }
        return content;
    }
    const renderListSchedule = () => {
        if (Object.keys(schedules).length > 0) {
            if (schedules[currentCinema] && schedules[currentCinema][currentDate]) {
                let getSchedule = schedules[currentCinema][currentDate];
                return Object.keys(getSchedule).map((item, index) => {
                    return <Schedule key={index} schedule={getSchedule[item]} movie={movie} cinema={cinemas[currentCinema]} location={locations[item]} />
                })
            } else {
                return renderEmpty();
            }
        } else {
            return renderEmpty();
        }
    }
    const renderCinema = () => {
        return Object.keys(cinemas).map(item => {
            let cinema = cinemas[item]
            return <Cinema key={item} handleSetCinema={() => handleSetCinema(item)} id={item} cinema={cinema} active={currentCinema} />
        })
    }
    const renderTablet = () => {
        return (
            <div id="showtimes-tablet" className={`${(navIndex === 0) ? "collapse-show " : ""}collapse`}>
                <div className="movie-detail">
                    <div className="grid">
                        <ul className="list-cinema">
                            {(cinemas) ? renderCinema() : renderLoading()}
                        </ul>
                        <div className="schedule">
                            <ul className="list-date custom-scroll">
                                {renderListDate()}
                            </ul>
                            <ul className="movie-list custom-scroll">
                                {(schedules !== null) ? (schedules !== undefined && currentCinema) ? renderListSchedule() : renderLoading() : renderEmpty()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const renderLoading = (heigh = 'auto') => {
        return <div style={{ textAlign: "center", height: heigh }}>loading</div>
    }
    const renderEmpty = (heigh = 'auto') => {
        return <div style={{ textAlign: "center", height: heigh }}>empty content</div>
    }


    return (movie !== null) ? (
        <div id="movie-content">
            <div className="container">
                <div id="content-title">
                    <div className="title">
                        {(movie) ? <Header isMobile={isMobile} movie={movie} /> : renderLoading('450px')}
                    </div>
                    <div className="detail">
                        <ul className="nav-tab">
                            {
                                navList.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => handleNavIndext(index)} className={(index === navIndex) ? "active" : ""}><button>{item}</button></li>
                                    );
                                })
                            }
                        </ul>
                        {(isMobile) ? renderMobile() : renderTablet()}
                        <div id="info-movie" className={`${(navIndex === 1) ? "collapse-show " : ""}collapse`}>
                            {(movie) ? <Infomation movie={movie} /> : renderLoading()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <Redirect to='/page-not-found' />
}

const mapStateToProps = (state) => ({
    movie: state.firestore.data.movie,
    schedules: state.schedules.detail,
    cinemas: state.firestore.data.cinemas,
    locations: state.firestore.data.locations,
})

const mapDispatchToProps = dispatch => {
    return {
        getSchedules: idMovie => dispatch(getSchedulesByMovie(idMovie))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [
        { collection: 'movies', doc: props.match.params.id, storeAs: 'movie' },
        { collection: 'cinemas' },
        { collectionGroup: 'locations' }
    ])
)(MovieDetail)