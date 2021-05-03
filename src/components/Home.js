import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import LocationIcon from '../assets/header/location.svg'
import UserIcon from '../assets/header/user.svg'
import BurgerMenuIcon from '../assets/header/burger_icon.svg'
import Option1 from '../assets/header_menu/booked_ticket.svg'
import Option2 from '../assets/header_menu/ticket_history.svg'
import Option3 from '../assets/header_menu/aboutus.svg'
import Option4 from '../assets/header_menu/setting.svg'
import Step1 from '../assets/body/resale.svg'
import Step2 from '../assets/body/buy_our_ticket.svg'
import Step3 from '../assets/body/getour_ticket.svg'
import { Movies as movies } from '../assets/img_links/ImagesLinks'
import EmptyStarIcon from '../assets/buy_ticket/empty_star.svg'
import HalfStarIcon from '../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../assets/buy_ticket/full_star.svg'
import BookMyShowIcon from '../assets/body/bookmyshow.svg'
import NetflixIcon from '../assets/body/netflex.svg'
import PrimeVideoIcon from '../assets/body/prime_video.svg'
import AhaIcon from '../assets/body/aha.svg'
import FbIcon from '../assets/footer/Icon awesome-facebook-f.svg'
import InstaIcon from '../assets/footer/Icon awesome-instagram.svg'
import LinkedInIcon from '../assets/footer/Icon awesome-linkedin.svg'
import TwitterIcon from '../assets/footer/Icon awesome-twitter.svg'


const Menu = () => {
    return (
        <>
            <div className="overlay-fixed">
                <div className="sub-menu-wrapper">
                    <div>
                        <p className="">Hi...</p>
                        <NavLink to="/login" className="sub-menu-login-option">Login</NavLink>
                    </div>
                    <div>
                        <div>
                            <img src={Option1} alt="" />
                            <p>Booked ticket</p>
                        </div>
                        <div>
                            <img src={Option2} alt="" />
                            <p>Ticket history</p>
                        </div>
                        <div>
                            <img src={Option3} alt="" />
                            <p>About Us</p>
                        </div>
                        <div>
                            <img src={Option4} alt="" />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default function Home() {
    const [isClicked, setIsClicked] = useState(false)
    const loadMovieCard = () => {
        let movie_card = movies.map(movie => {
            return (
                <div key={movie.id}>
                    <div className="img-movie">
                        <img loading="lazy" src={movie.img_url} alt="movie img" />
                    </div>
                </div>
            )
        })
        return movie_card
    }

    const loadMovieDetails = () => {
        let movie_details = movies.map(movie => {
            return (
                <div key={movie.id} className="movie-details">
                    <div className="star-rating-container">
                        <img onLoad={console.log("loading...")} loading="lazy" src={FullStarIcon} alt="star1" />
                        <img loading="lazy" src={FullStarIcon} alt="star2" />
                        <img loading="lazy" src={FullStarIcon} alt="star3" />
                        <img loading="lazy" src={HalfStarIcon} alt="star4" />
                        <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                    </div>
                    <h2 className="mini-sub-heading">{movie.name}</h2>
                    <p className="paragraph">UA</p>
                    <p className="paragraph">Telugu,Tamil,Kannada</p>
                </div>
            )
        })
        return movie_details
    }
    
    
    return (
        <div>
            <header className="home-header">
                <div className="logo-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                        <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                            <g id="Group_5" dataname="Group 5" transform="translate(22 -410.645)">
                                <circle id="Ellipse_7" dataname="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff" />
                                <circle id="Ellipse_6" dataname="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff" />
                            </g>
                            <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                <path id="Path_3781" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                <path id="Path_3782" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
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
                </div>
                <div className="nav-wrapper">
                    <div className="location-option">
                        <NavLink to="/location" className="nav-link">
                            <img src={LocationIcon} alt="" />
                        </NavLink>
                    </div>
                    <div className="login-option">
                        <NavLink to="/login" className="nav-link mini-sub-heading">Login</NavLink>
                    </div>
                    <div className="sub-menu-option">
                        <div onClick={() => setIsClicked(prevState => !prevState)}>
                            <img src={BurgerMenuIcon} alt="" />
                            <img src={UserIcon} alt="" />
                        </div>
                        {isClicked && <Menu />}
                    </div>
                </div>
            </header>
            <section className="section1-wrapper">
                <div>
                    <h2 className="heading">Wanna Sell Your Ticket?</h2>
                    <p className="small-paragraph">
                        sell your tickets with us in a easier way and get more points.
                    </p>
                    <button className="paragraph" type="button">Resale Your Ticket</button>
                </div>
                <div>
                    <h2 className="heading">Buy your valuable Ticket</h2>
                    <p className="small-paragraph">
                        Get your tickets, chill with your show and your security is our priority.
                        </p>
                    <button className="paragraph" type="button">Buy Our Ticket</button>
                </div>
            </section>
            <section className="section2-wrapper">
                <div>
                    <h2 className="sub-heading">How it works?</h2>
                </div>
                <div>
                    <div>
                        <img src={Step1} alt="" />
                        <h3 className="paragraph secondary-color">Reselling tickets</h3>
                        <p className="very-small-paragraph">
                            sell your ticket, you will be refunded <span className="secondary-color">70%</span> on it.
                        </p>
                    </div>
                    <div>
                        <img src={Step2} alt="" />
                        <h3 className="paragraph secondary-color">Buy Your tickets</h3>
                        <p className="very-small-paragraph">
                            buy our ticket for easy availability,security at your <span className="secondary-color">nearest theatre.</span>
                        </p>
                    </div>
                    <div>
                        <img src={Step3} alt="" />
                        <h3 className="paragraph secondary-color">Get Your tickets</h3>
                        <p className="very-small-paragraph">
                            after purchasing the <span className="secondary-color">ticket</span> we send it through message or gmail.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section3-wrapper">
                <div>
                    <h2 className="sub-heading">Movies</h2>
                </div>
                <div className="mcontainer">
                    <div className="movies_container">
                        <div className="movie-cards-container">
                            {loadMovieCard()}
                        </div>
                        <div className="movie-details-container">
                            {loadMovieDetails()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section4-wrapper">
                <div>
                    <h3 className="sub-heading">Partners</h3>
                </div>
                <div>
                    <img src={BookMyShowIcon} alt="" />
                    <img src={NetflixIcon} alt="" />
                    <img src={PrimeVideoIcon} alt="" />
                    <img src={AhaIcon} alt="" />
                </div>
            </section>
            <footer className="home-footer">
                <div>
                    <div className="logo-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                            <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                <g id="Group_5" dataname="Group 5" transform="translate(22 -410.645)">
                                    <circle id="Ellipse_7" dataname="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff" />
                                    <circle id="Ellipse_6" dataname="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff" />
                                </g>
                                <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                    <path id="Path_3781" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    <path id="Path_3782" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
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
                    </div>
                </div>
                <div>
                    <div>
                        <img src={FbIcon} alt="" />
                        <p>Facebook</p>
                    </div>
                    <div>
                        <img src={TwitterIcon} alt="" />
                        <p>Twitter</p>
                    </div>
                    <div>
                        <img src={InstaIcon} alt="" />
                        <p>Instagram</p>
                    </div>
                    <div>
                        <img src={LinkedInIcon} alt="" />
                        <p>Linkedin</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}