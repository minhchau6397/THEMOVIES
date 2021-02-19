import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getNewsByCategory } from '../../redux/actions/news_action'
import { setNav } from '../../redux/actions/nav_action'

export const News = (props) => {
    const { news } = props
    const [navIndex, setNavIndex] = useState(0);
    const [multiple, setMultiple] = useState(1);
    const elRef = useRef(null);
    const newsId = 'news';
    let nav = {
        name: ["Tổng hợp", "Review", "Khuyến mãi"],
        type: ["all", "review", "sale"]
    };


    useEffect(() => {
        props.getNews(nav.type[navIndex], multiple);
    }, [navIndex, multiple])
    useEffect(() => {
        if (elRef.current && props.nav) {
            elRef.current.scrollIntoView({ behavior: 'smooth' });
            props.setNav('news', false)
        }
    }, [props.nav])


    const handleClickNav = (index) => {
        setNavIndex(index)
    }


    const renderNav = () => {
        return nav.name.map((item, index) => {
            return <li key={index} onClick={() => handleClickNav(index)} className={(index === navIndex) ? "active" : ""}><button>{item}</button></li>
        })
    }
    const renderNews = () => {
        return news.map((item, index) => {
            return (
                <li key={index} className="item-news">
                    <div className="article">
                        <Link to={`/article/${item.id}`}>
                            <img src={(index % 8 > 0 && index % 8 < 5) ? item.thumbnail : item.image} alt={item.title} />
                        </Link>
                        <div className="cards-title">
                            <Link to={`/article/${item.id}`}>
                                <h3>{item.title}</h3>
                            </Link>
                        </div>
                        <div className="cards-content">{item.subContent}</div>
                    </div>
                </li>
            )
        })
    }
    const renderLoading = () => {
        return <div style={{ textAlign: "center", height: '701px' }}>loading</div>
    }
    const renderEmpty = () => {
        return <div style={{ textAlign: "center", height: '701px' }}>empty content</div>
    }
    
    return (
        <section id="news" ref={elRef}>
            <div className="wrap">
                <div className="line" />
                <div className="main-title">
                    <h2>News</h2>
                </div>
                <ul className="nav-tab">
                    {renderNav()}
                </ul>
                <ul className="list-news">
                    {(news.length > 0) ? renderNews() : renderLoading()}
                </ul>
                <div className="ctrl-insert">
                    <button onClick={() => setMultiple(multiple + 1)} disabled={(multiple * 8 > news.length)?true:false} style={(multiple * 8 > news.length)?{backgroundColor:'#bf4145'}:{}} className="btn">{(multiple * 8 > news.length)?"Hết tin tức":"xem thêm"}</button>
            </div>
            </div>
        </section >
    )
}

const mapStateToProps = (state) => ({
    news: state.news,
    nav: state.nav.news
})

const mapDispatchToProps = dispatch => {
    return {
        getNews: (catagory, multiple) => dispatch(getNewsByCategory(catagory, multiple)),
        setNav: (name, value) => dispatch(setNav(name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)