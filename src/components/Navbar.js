import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { setNav } from '../redux/actions/nav_action'

export const Navbar = (props) => {
    const [show, setShow] = useState(false);
    // const [sticky, setSticky] = useState(true);
    const handleToggleIcon = () => {
        setShow(!show);
    }
    const handleNav = (name) => {
        setShow(false)
        props.setNav(name, true);
    }

    return (
        <>
            <div className="block" style={{ height: '61px' }}></div>
            <nav id="main-nav" style={{ top: '0', position: 'fixed', width: '100%', zIndex: '10' }} >
                <div className="wrapss">
                    <Link onClick={() => handleNav('home')} to="/"><h1 id="logo">The Movie</h1></Link>
                    <button className={`nav-toggler-icon ${show ? "active" : ""}`} onClick={handleToggleIcon}>
                        <i className="fas fa-bars" />
                    </button>
                    <div className={`nav-item ${show ? "active" : ""}`}>

                        <svg height={288} viewBox="0 0 131 288" width={131} xmlns="http://www.w3.org/2000/svg" className="vector vertical">
                            <path d="M-7.203-11.898c88.42 119.5 134.236 219.308 137.445 299.42" fill="none" fillRule="evenodd" stroke="#fff" />
                        </svg>
                        <svg height={76} viewBox="0 0 222 76" width={222} xmlns="http://www.w3.org/2000/svg" className="vector horizon">
                            <path d="M-54.44 39.4c104.2 14.2 196.14 11 275.85-9.63m-273.7 51.3C-21.23 91.84 34.5 65.1 114.9.84" fill="none" stroke="#fff" />
                        </svg>
                        <ul className="collapse-item">
                            <li><Link onClick={() => handleNav('home')} to="/">Home</Link></li>
                            <li><Link onClick={() => handleNav('showing')} to="/">Lịch chiếu</Link></li>
                            {!show &&<li><Link onClick={() => handleNav('cinema')} to="/">Cụm rạp</Link></li>}
                            <li><Link onClick={() => handleNav('news')} to="/">Tin tức</Link></li>
                        </ul>
                        {/* <div className="login">
                    <Link className="btn" to="/">Đăng nhập</Link><Link className="btn" to="/">Đăng ký</Link>
                </div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setNav: (name, value) => dispatch(setNav(name, value))
    }
}

export default connect(null, mapDispatchToProps)(Navbar)