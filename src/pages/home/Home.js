import React, { useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux'

import BannerLeader from '../../components/home/BannerLeader'
import ListShowing from '../../components/home/ListShowing'
import Cinema from '../../components/home/Cinema'
import News from '../../components/home/News'

import { useWindowDimension } from '../../utility'
import { setNav } from '../../redux/actions/nav_action';

export const Home = (props) => {
    const { windowWidth } = useWindowDimension();
    const dispatch = useDispatch();
    const elRef = useRef(null);
    const isMobile = (windowWidth <= 620) ? true : false;

    useEffect(() => {
        if (elRef.current && props.nav) {
            elRef.current.scrollIntoView({ behavior: 'smooth' });
            dispatch(setNav('home', false));
        }
    }, [props.nav,dispatch])

    return (
        <div ref={elRef}>
            <BannerLeader />
            <div id="main-content">
                <div className="container">
                    <ListShowing isMobile={isMobile} />
                    {(isMobile) ? null : <Cinema />}
                    <News />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    nav: state.nav.home
})

export default connect(mapStateToProps, null)(Home)
