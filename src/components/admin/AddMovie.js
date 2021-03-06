import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createMovie, createMovies } from '../../redux/actions/movie_action'

export const AddData = (props) => {
    const [movie, setMovie] = useState({
        titleEN: "Hard kill 123",
        titleVN: "Đối đầu 123",
        release: "2021-01-05",
        expireTime: "2021-02-20",
        producer: "Joel Crawford",
        cast: "Kelly Marie Tran, Cloris Leachman, Catherine Keener, Ryan Reynolds, Emma Stone, Nicolas Cage",
        category: "Hài, Hoạt Hình",
        nation: "Mỹ",
        describes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate quam quae dicta ad quos, numquam et illum illo accusamus nesciunt voluptatem dignissimos fugiat quasi debitis eos, officia assumenda quia?",
        age: "c18",
        type: "2D/Digital",
        imdb: "0",
        score: "5.5",
        length: "103",
        image: "/images/banner_hardkill.jpg",
        background: "/images/banner_hardkill_bg.jpg",
        thumbnail: "https://via.placeholder.com/150.png"
    });

    const handleChange = (target) => {
        setMovie({
            ...movie,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createMovie(movie);
    }
    const handleSubmitBanner = () => {

    }
    const handleSubmitMovies = () => {
        props.createMovies({
            titleEN: "Dragon Rider",
            titleVN: "Kỵ Sĩ Cưỡi Rồng",
            image: "/images/banner_dragonrider.jpg",
            background: "/images/slide_dragonrider.jpg",
            imageMobile: "/images/mobile_dragonrider.jpg",
            isShowing: false,
            release: "2021-04-20",
            expireTime: "2021-05-10",
            producer: "Joel Crawford",
            cast: "Kelly Marie Tran, Cloris Leachman, Catherine Keener, Ryan Reynolds, Emma Stone, Nicolas Cage",
            category: "Hài, Hoạt Hình",
            nation: "Mỹ",
            describes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate quam quae dicta ad quos, numquam et illum illo accusamus nesciunt voluptatem dignissimos fugiat quasi debitis eos, officia assumenda quia?",
            age: "p",
            type: "2D/Digital",
            imdb: "0",
            score: "5.5",
            length: "103",
            thumbnail: "https://via.placeholder.com/150.png",
        })
    }


    return (
        <div>
            <h2 style={{ fontWeight: "700" }}>Insert movie</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="panel">
                    <label htmlFor="titleVN">titleVN</label>
                    <input onChange={(e) => handleChange(e.target)} id="titleVN" name="titleVN" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="titleEN">titleEN</label>
                    <input onChange={(e) => handleChange(e.target)} id="titleEN" name="titleEN" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="image">image</label>
                    <input onChange={(e) => handleChange(e.target)} id="image" name="image" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="background">background</label>
                    <input onChange={(e) => handleChange(e.target)} id="background" name="background" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="thumbnail">thumbnail</label>
                    <input onChange={(e) => handleChange(e.target)} id="thumbnail" name="thumbnail" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="release">release</label>
                    <input onChange={(e) => handleChange(e.target)} id="release" name="release" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="type">type</label>
                    <input onChange={(e) => handleChange(e.target)} id="type" name="type" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="age">age</label>
                    <input onChange={(e) => handleChange(e.target)} id="age" name="age" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="imdb">imdb</label>
                    <input onChange={(e) => handleChange(e.target)} id="imdb" name="imdb" type="number" />
                </div>
                <div className="panel">
                    <label htmlFor="score">score</label>
                    <input onChange={(e) => handleChange(e.target)} id="score" name="score" type="number" />
                </div>
                <div className="panel">
                    <label htmlFor="producer">producer</label>
                    <input onChange={(e) => handleChange(e.target)} id="producer" name="producer" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="nation">nation</label>
                    <input onChange={(e) => handleChange(e.target)} id="nation" name="nation" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="length">length</label>
                    <input onChange={(e) => handleChange(e.target)} id="length" name="length" type="number" />
                </div>
                <div className="panel">
                    <label htmlFor="expire">expire</label>
                    <input onChange={(e) => handleChange(e.target)} id="expire" name="expire" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="describes">describes</label>
                    <input onChange={(e) => handleChange(e.target)} id="describes" name="describes" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="category">category</label>
                    <input onChange={(e) => handleChange(e.target)} id="category" name="category" type="text" />
                </div>
                <div className="panel">
                    <label htmlFor="cast">cast</label>
                    <input onChange={(e) => handleChange(e.target)} id="cast" name="cast" type="text" />
                </div>
                <input type="submit" value="submit" />
            </form>

            <button onClick={e => handleSubmitMovies()} className="btn">add movies</button>
            <button onClick={e => handleSubmitBanner()} className="btn">add banner</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        createMovie: (movie) => dispatch(createMovie(movie)),
        createMovies: (movie) => dispatch(createMovies(movie))
    }
}

export default connect(null, mapDispatchToProps)(AddData)
