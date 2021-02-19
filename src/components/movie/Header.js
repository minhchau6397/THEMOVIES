import React, { memo } from 'react'

import CircleStore from './circle-store'

function Header({ movie, isMobile }) {
    return (
        <>
            <div className="bg">
                <span className="score" style={{ fontSize: '18px' }}><i className="fas fa-star" style={{ color: 'yellow' }} /> {movie.score}</span>
                <div className="button trailer" />
                <img src={movie.background} alt={movie.title} />
                <div className="gra" />
                {!isMobile && <div id="title-tablet">
                    <div className="img">
                        <div className="button trailer" />
                        <img src={movie.image} alt={movie.title} />
                    </div>
                    <div className="main-info">
                        <div className="release"><span>{movie.release}</span></div>
                        <h2 className="title"><span className="age"><i className={movie.age}>{movie.age}</i></span>{`${movie.titleVN} - ${movie.titleEN}`}</h2>
                        <span className="sub-info">{movie.length} phút - {movie.imdb} IMDb - {movie.type}</span>
                    </div>
                    <div className="rating">
                        <CircleStore score={movie.score} />
                        {/* <span className="count-cmt">4 người đánh giá</span> */}
                    </div>
                </div>
                }
            </div>
            {isMobile && <div className="main-info mobile">
                <div className="card">
                    <div className="button trailer" />
                    <img src={movie.image} alt={movie.title} />
                    <div className="release"><span>{movie.release}</span></div>
                    <h3 className="title"><span className="age"><i className={movie.age}>{movie.age}</i></span>{`${movie.titleVN} - ${movie.titleEN}`}</h3>
                    <span className="sub-info">{movie.length} phút - {movie.imdb} IMDb - {movie.type}</span>
                </div>
            </div>}
        </>
    )
}

export default memo(Header)
