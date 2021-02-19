import React, { useState, useEffect, useCallback, useRef } from 'react'
import { connect } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'


import { dateToString } from '../../utility'
import { setNav } from '../../redux/actions/nav_action';


export const ListShowing = (props) => {
    const { isMobile, movies, coming } = props;
    const [carousel, setCarousel] = useState(0);
    const [isComing, setIsComing] = useState(false);
    const [dir, setDir] = useState(1);
    const [arrayCarousel, setArrayCarousel] = useState(null);
    const [arrayCarouselComing, setArrayCarouselComing] = useState(null);
    const showingId = 'movie';
    const elRef = useRef(null);
    const transitions = useTransition(carousel, null, {
        initial: null,
        from: { opacity: 0, transform: `translate3d(${dir * 100}%,0,0)` },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0' },
        leave: { opacity: 0, transform: `translate3d(${dir * -100}%,0,0)` }
    })


    useEffect(() => {
        if (elRef.current && props.nav) {
            elRef.current.scrollIntoView({ behavior: 'smooth' });
            props.setNav('showing', false)
        }
    }, [props.nav])
    useEffect(() => {
        if (movies) {
            let numberCarousel = Math.ceil(movies.length / 8);
            let movieArray = [];
            for (let i = 0; i < numberCarousel; i++) {
                if (i === numberCarousel - 1 && i !== 0) {
                    movieArray[i] = movies.slice(i * 8, i * 8 + movies.length % 8);
                } else {
                    movieArray[i] = movies.slice(i * 8, i * 8 + 8);
                }
            }
            setArrayCarousel(movieArray);
        }
    }, [movies])
    useEffect(() => {
        if (coming) {
            let numberCarousel = Math.ceil(coming.length / 8);
            let movieArray = [];
            for (let i = 0; i < numberCarousel; i++) {
                if (i === numberCarousel - 1 && i !== 0) {
                    movieArray[i] = coming.slice(i * 8, i * 8 + coming.length % 8);
                } else {
                    movieArray[i] = coming.slice(i * 8, i * 8 + 8);
                }
            }
            setArrayCarouselComing(movieArray);
        }
    }, [coming])


    const handleCarousel = useCallback((direction) => {
        let current = carousel + direction;
        let length = Math.ceil(movies.length / 8);
        if (current < 0) {
            current = length - 1;
        }
        if (current >= length) {
            current = 0;
        }
        setDir(direction);
        setCarousel(current);
    })
    const handleCarouselMobile = useCallback((direction) => {
        let current = carousel + direction;
        let length = Math.ceil(movies.length / 8);
        if (current < 0) {
            current = length - 1;
        }
        if (current >= length) {
            current = 0;
        }
        setDir(direction);
        setCarousel(current);
        elRef.current.scrollIntoView()
    })


    //----------Showing component
    const ShowingTablet = ({ content }) => {
        return (
            <li className="item-list">
                <Link to={`/movie/detail/${content.id}`}>
                    <div className="card">
                        <img src={content.image} alt={content.titleEN} />
                        <div className="card-title">
                            <span className="rating">
                                <i className="fas fa-star" />{content.score}</span>
                            <h3><span className="age"><i className={content.age}>{content.age}</i></span>{`${content.titleVN} - ${content.titleEN}`}</h3>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
    const ShowingMobile = ({ content }) => {
        return (
            <li className="item-list">
                <Link to={`/movie/detail/${content.id}`}>
                    <div className="card">
                        <img src={content.imageMobile} alt={content.titleEN} />
                        <ul className="list-icon">
                            <li className="icon-item">
                                <span className="rating-star">
                                    <i className="fas fa-star" />{content.score}</span>
                            </li>
                            <li className="icon-item">
                                <span className="age"><i className={content.age}>{content.age}</i></span>
                            </li>
                        </ul>
                    </div>
                </Link>
            </li>
        )
    }


    const renderTabletShowing = (array) => {
        if (array && array.length > 0) {
            if (array[carousel].length > 0) {
                return (
                    <div className="large-show">
                        {transitions.map(({ item, props, key }) => {
                            return (
                                <animated.div key={key} style={{ ...props }} className="carousel">
                                    <ul className="list-item grid">
                                        {
                                            array[carousel].map((item, index) => {
                                                return (
                                                    <ShowingTablet key={index} content={item} />
                                                )
                                            })
                                        }
                                    </ul>
                                </animated.div>
                            )
                        })}
                        <div className="large-ctrl">
                            <button onClick={() => handleCarousel(-1)} className="prev-btn ctrl-btn" />
                            <button onClick={() => handleCarousel(1)} className="next-btn ctrl-btn" />
                        </div>
                    </div>
                )
            }
        } else {
            return renderEmpty();
        }
    }

    const renderMobile = (array) => {
        console.log(array);
        if (array && array.length > 0) {
            if (array[carousel].length > 0) {
                return (
                    <div className="mini-show">
                        <ul className="list-item">
                            {
                                array[carousel].map((item, index) => {
                                    return (
                                        <ShowingMobile key={index} content={item} />
                                    )
                                })
                            }
                        </ul>
                        <div className="movie-ctrl">
                            <button onClick={() => handleCarouselMobile(-1)} className="prev-btn">❮</button>
                            <button onClick={() => handleCarouselMobile(1)} className="next-btn">❯</button>
                        </div>
                    </div>
                )
            }
        } else {
            return renderEmpty();
        }
    }
    const renderLoading = () => {
        return (
            <div style={{ textAlign: "center" }}>loading</div>
        )
    }

    const renderEmpty = () => {
        return (
            <div style={{ textAlign: "center" }}>empty content</div>
        )
    }


    return (
        <section id={showingId} ref={elRef}>
            <div className="main-title">
                <h2>Movie</h2>
            </div>
            <ul className="nav-tab">
                <li className={`${(isComing) ? "" : "active"}`} ><button onClick={() => { setIsComing(false); setCarousel(0) }} className="showing">Đang Chiếu</button></li>
                <li className={`${(!isComing) ? "" : "active"}`} ><button onClick={() => { setIsComing(true); setCarousel(0) }} className="coming">Sắp Chiếu</button></li>
            </ul>
            <div className="body-content">
                {movies ? (isMobile) ? renderMobile((isComing) ? arrayCarouselComing : arrayCarousel) : renderTabletShowing((isComing) ? arrayCarouselComing : arrayCarousel) : renderLoading()}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    movies: state.firestore.ordered.movies,
    nav: state.nav.showing,
    coming: state.firestore.ordered.coming
    // movies: [
    //     {age: "c18",background: "/images/slide_4.jpg",cast: "Kelly Marie Tran, Cloris Leachman, Catherine Keener, Ryan Reynolds, Emma Stone, Nicolas Cage",category: "Hài, Hoạt Hình",describes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate quam quae dicta ad quos, numquam et illum illo accusamus nesciunt voluptatem dignissimos fugiat quasi debitis eos, officia assumenda quia?",expireTime: "2021-02-20",id: "iU3CD34NCR29Kg2XNIhm",image: "/images/banner_peninsula.jpg",imageMobile: "/images/slide_4.jpg",imdb: "0",length: "103",nation: "Mỹ",producer: "Joel Crawford",release: "2021-01-05",score: "5.5",thumbnail: "https://via.placeholder.com/150.png",titleEN: "Peninsula",titleVN: "Bán đảo Peninsula",type: "2D/Digital"},
    // ]
})
const mapDispatchToProps = dispatch => {
    return {
        setNav: (name, value) => dispatch(setNav(name, value))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: "movies",
            where: [["isShowing", "==", true], ["expireTime", ">=", dateToString(new Date())]],
            orderBy: ["expireTime", "desc"]
        },
        {
            collection: "movies",
            where: [[["isShowing", "==", false]], ["release", ">=", dateToString(new Date())]],
            orderBy: ["release", "asc"],
            storeAs: 'coming'
        }
    ])
)(ListShowing)