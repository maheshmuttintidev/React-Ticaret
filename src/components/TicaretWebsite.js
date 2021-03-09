import React, { Component, Suspense, lazy } from "react";
import {HashRouter, Route, NavLink} from "react-router-dom"
import LocationIcon from '../assets/header/location.svg'
import UserIcon from '../assets/header/user.svg'
import BurgerIcon from '../assets/header/barger_icon.svg'
import Facebook from '../assets/footer/Icon awesome-facebook-f.svg'
import Twitter from '../assets/footer/Icon awesome-twitter.svg'
import Instagram from '../assets/footer/Icon awesome-instagram.svg'
import Linkedin from '../assets/footer/Icon awesome-linkedin.svg'
import '../css/ticaret.css'
const Home = lazy(() => import('./Home'))
const Login = lazy(() => import('./Login'))
const Location = lazy(() => import('./Location'))
const Profile = lazy(() => import('./Profile'))
const AboutUs = lazy(() => import('./AboutUs'))
const CustomerHelp = lazy(() => import('./CustomerHelp'))

class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
         showPopup: false
      }
    }

    togglePopup() {
        this.setState({ 
            showPopup: !this.state.showPopup
        })
    }
    
    render() {
        return (
            <div className="ticaret-container">
                <HashRouter>
                    <header>
                        <div className="logo-container">
                            <NavLink to="/" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                                    <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_5" dataname="Group 5" transform="translate(22 -410.645)">
                                        <circle id="Ellipse_7" dataname="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff"/>
                                        <circle id="Ellipse_6" dataname="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff"/>
                                    </g>
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path id="Path_3781" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3"/>
                                        <path id="Path_3782" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3"/>
                                    </g>
                                    <g id="Group_4" dataname="Group 4" transform="translate(-102 -417)">
                                        <text id="T" transform="translate(9 44)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">T</tspan></text>
                                        <text id="i" transform="translate(30.794 44)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">i</tspan></text>
                                        <text id="r" transform="translate(79.367 44)" fill="#fff" fontSize="34" fontStyle="italic"><tspan x="0" y="0">r</tspan></text>
                                        <text id="e" transform="translate(95.398 45)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">e</tspan></text>
                                        <text id="t-2" dataname="t" transform="translate(118.696 45)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">t</tspan></text>
                                    </g>
                                    </g>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="options-container">
                            <NavLink to="/location" className="nav-link location">
                                <img src={LocationIcon} alt="location" />
                            </NavLink>
                            <NavLink to="/login" className="nav-link login" onClick={this.togglePopup.bind(this)}>
                                Login
                            </NavLink>
                            <NavLink to="/profile" className="nav-link profile">
                                <img src={BurgerIcon} alt="Burger Icon" className="burger-icon"/>
                                <img src={UserIcon} alt="profile" className="profile-icon" />
                            </NavLink>
                        </div>
                    </header>
                    <article className="main">
                            <Suspense fallback={
                                <div className="loader-1">
                                    <div className="loading-child"></div>
                                </div>
                            }>
                                <Route exact path="/" component={Home} />
                            </Suspense>
                            <Suspense fallback={
                                <div className="loader-1">
                                    <div className="loading-child"></div>
                                </div>
                            }>
                                <Route path="/location" component={Location} />
                            </Suspense>

                            <Suspense fallback={
                                <div className="loader-1">
                                    <div className="loading-child"></div>
                                </div>
                            }>
                                {this.state.showPopup ? <Login text="x" closePopup={this.togglePopup.bind(this)} /> : null }
                            </Suspense>
                            
                            <Suspense fallback={
                                <div className="loader-1">
                                    <div className="loading-child"></div>
                                </div>
                            }>
                                <Route path="/profile" component={Profile} />
                            </Suspense>
                            <Suspense fallback={
                                <div className="loader-1">
                                <div className="loading-child"></div>
                            </div>
                            }>
                                <Route path="/about-us" component={AboutUs} />
                            </Suspense>
                            <Suspense fallback={
                                <div className="loader-1">
                                    <div className="loading-child"></div>
                                </div>
                            }>
                                <Route path="/customer-help" component={CustomerHelp} />
                            </Suspense>
                    </article>
                </HashRouter>
                <footer>
                    <div className="btm-logo-container">
                        <HashRouter>
                            <NavLink to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                                    <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_5" dataname="Group 5" transform="translate(22 -410.645)">
                                        <circle id="Ellipse_7" dataname="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff"/>
                                        <circle id="Ellipse_6" dataname="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff"/>
                                    </g>
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path id="Path_3781" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3"/>
                                        <path id="Path_3782" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3"/>
                                    </g>
                                    <g id="Group_4" dataname="Group 4" transform="translate(-102 -417)">
                                    <text id="T" transform="translate(9 44)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">T</tspan></text>
                                        <text id="i" transform="translate(30.794 44)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">i</tspan></text>
                                        <text id="r" transform="translate(79.367 44)" fill="#fff" fontSize="34" fontStyle="italic"><tspan x="0" y="0">r</tspan></text>
                                        <text id="e" transform="translate(95.398 45)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">e</tspan></text>
                                        <text id="t-2" dataname="t" transform="translate(118.696 45)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">t</tspan></text>
                                    </g>
                                    </g>
                                </svg>
                            </NavLink>
                        </HashRouter>
                    </div>
                    <div className="btm-options-container">
                        <HashRouter>
                            <div className="btm-options1">
                                <NavLink className="nav-link about" to="/about-us">About Us</NavLink>
                                <NavLink className="nav-link help" to="/customer-help">Customer Help</NavLink>
                            </div>
                            <div className="btm-options2">
                                <NavLink className="nav-link fb" to="/facebook">
                                    <img src={Facebook} alt="follow us on facebook"/>
                                    Facebook
                                </NavLink>
                                <NavLink className="nav-link tw" to="/twiter">
                                    <img src={Twitter} alt="follow us on twitter"/>
                                    Twitter
                                </NavLink>
                                <NavLink className="nav-link ins" to="/instagram">
                                    <img src={Instagram} alt="follow us on instagram"/>
                                    Instagram
                                </NavLink>
                                <NavLink className="nav-link lnk" to="/linkedin">
                                    <img src={Linkedin} alt="follow us on linkedin"/>
                                    Linkedin
                                </NavLink>
                            </div>
                        </HashRouter>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Header;