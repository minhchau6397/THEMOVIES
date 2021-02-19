import React, { memo } from 'react'

import { timestrToSec, formatTime } from '../utility'

export default memo(function Schedule({ schedule, cinema, movie, location }) {
    const renderShowing = () => {
        return Object.keys(schedule).map((type,indexType) => {
            return (
                <React.Fragment key={indexType}>
                    <div className="version">{type}</div>
                    <ul className="time-showing-list grid">
                        {
                            schedule[type].map((item, index) => {
                                return (
                                    <li key={index} className="time-showing">
                                        <span className="starting-time">{item}</span><span className="ending-time">{formatTime(timestrToSec(item) + (movie.length * 60))}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </React.Fragment>
            )
        })
    }
    return (
        <li className="movie-item">
            <div className="mini-card">
                <img src={location.thumbnail} alt="" />
                <div className="card-body">
                    <h3 className="cards-title"><span className="age"><i className={movie.age}>{movie.age}</i></span><span className={cinema.className}>{cinema.cinema}</span> - {location.name}</h3>
                    <div className="address">{location.address}</div>
                </div>
                {renderShowing()}
            </div>
        </li>
    )
})
