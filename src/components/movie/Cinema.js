import React from 'react'

export default function Cinema({ cinema, active, handleSetCinema, id }) {
    return (
        <li onClick={() => handleSetCinema(cinema.cinemaId)} className={`cinema-item${(id === active) ? " active" : ""}`}>
            <img src={cinema.image} alt={cinema.cinema} />
            <h3>{cinema.cinema}</h3>
        </li>
    )
}
