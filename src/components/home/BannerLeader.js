import React, { useState, useEffect } from 'react'
import { connect, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import { getBanners } from '../../redux/actions/banner_action'

export const BannerLeader = (props) => {
    const { banners } = props;
    const dispatch = useDispatch();
    const [indexBanner, setIndexBanner] = useState(0);
    const transition = useTransition(indexBanner, null, {
        initial: null,
        from: { opacity: 0, display: 'none' },
        enter: { opacity: 1, display: 'block' },
        leave: { opacity: 0, display: 'none' },
        config: { tension: 500 }
    })


    useEffect(() => {
        dispatch(getBanners())
    }, [dispatch])


    const handleSlide = (direction) => {
        let current = indexBanner + direction;
        if (current < 0) {
            current = banners.length - 1;
        }
        if (current >= banners.length) {
            current = 0;
        }
        setIndexBanner(current);
    }
    const handleDotCtrl = (index) => {
        setIndexBanner(index)
    }


    const renderBackground = () => {
        if (banners.length > 0) {
            return transition.map(({ item, props, key }) => {
                return <animated.img key={key} style={{ ...props }} src={banners[item].background} alt={`background ${banners[item].titleEN}`} />
            })
        }
    }
    const renderContent = () => {
        return banners.map((item, index) => {
            return (
                <li key={index} className={`item-content${(index === indexBanner) ? " active" : ""}`}>
                    <h2 className="banner-title"><Link to={`/movie/detail/${item.movieId}`}>{`${item.titleVN} - ${item.titleEN}`}</Link></h2>
                    <p className="banner-content">{item.content}</p>
                </li>
            )
        })
    }
    const renderDotCtrl = () => {
        return banners.map((item, index) => {
            return <span key={index} onClick={() => handleDotCtrl(index)} className={`dot-ctrl${(index === indexBanner) ? " active" : ""}`} />
        })
    }
    const renderSubBanner = () => {
        if (banners.length > 0) {
            return transition.map(({ item, props, key }) => {
                return <Link key={key} to={`/movie/detail/${banners[item].movieId}`}><animated.img style={{ ...props }} className="myslide" src={banners[item].image} alt={banners[item].titleEN} /></Link>
            })
        }
    }
    const rennderLoading = () => {
        return <div style={{ textAlign: "center" }}>loading</div>
    }


    return (
        <div id="lead-banner">
            <div className="pack">
                <div className="bg-banner">
                    {(banners) && renderBackground()}
                </div>
                <div className="grid">
                    <div className="content-banner">
                        <ul className="list-content">
                            {(banners) ? renderContent() : rennderLoading()}
                        </ul>
                        <div className="slide-controller">
                            <div onClick={() => handleSlide(-1)} className="prev-btn ctrl-btn">❮</div>
                            <div onClick={() => handleSlide(1)} className="next-btn ctrl-btn">❯</div>
                            <div className="list-dot-ctrl">
                                {(banners) && renderDotCtrl()}
                            </div>
                        </div>
                    </div>
                    <div className="sub-banner">
                        {(banners) && renderSubBanner()}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    banners: state.banners
})

export default connect(mapStateToProps, null)(BannerLeader)