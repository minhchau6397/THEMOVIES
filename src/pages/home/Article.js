import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

export const Article = (props) => {
    const { recNews, news } = props;

    useEffect(() => {
        document.documentElement.scrollIntoView()
    }, [])
    
    const renderListSuggest = () => {
        return recNews.map((item, index) => {
            return (
                <li className="col-md" key={index}>
                    <div className="article">
                        <Link exact="true" to={`/article/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                        </Link>
                        <div className="cards-title">
                            <Link exact="true" to={`/article/${item.id}`}>
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
        return <div style={{ textAlign: "center", height: '1080px' }}>loading</div>
    }
    // const renderEmpty = () => {
    //     return <div style={{ textAlign: "center", height: '1080px' }}>empty content</div>
    // }


    return (news !== null) ? (
        <div id="article">
            <div className="container">
                <div className="wrap">
                    {(news) ?
                        (<>
                            <h2 className="title">{news.title}</h2>
                            <div className="break"></div>
                            <div className="content" dangerouslySetInnerHTML={{ __html: news.content }} />
                            <div className="break"></div>
                        </>) : renderLoading()
                    }
                    <ul className="list-news">
                        {(recNews) ? renderListSuggest() : renderLoading()}
                    </ul>
                </div>
            </div>
        </div>
    ) : (<Redirect to="/page-not-found" />)
}

const mapStateToProps = (state) => {
    return ({
        news: state.firestore.data.new,
        recNews: state.firestore.ordered.news
    })
}

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect(props => [
        { collection: 'news', doc: props.match.params.id, storeAs: 'new' },
        { collection: 'news', where: ['type', 'array-contains', 'all'], orderBy: ['release', 'desc'], limit: 3 }
    ])
)(Article)