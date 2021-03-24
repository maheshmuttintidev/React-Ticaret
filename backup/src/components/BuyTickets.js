import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import HalfStarIcon from '../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../assets/buy_ticket/full_star.svg'
import EmptyStarIcon from '../assets/buy_ticket/empty_star.svg'
import {
        MOVIE_1,
        MOVIE_2,
        MOVIE_3, 
        MOVIE_4, 
        MOVIE_5,
        MOVIE_6,
        MOVIE_1_NAME, 
        MOVIE_2_NAME, 
        MOVIE_3_NAME,
        MOVIE_4_NAME,
        MOVIE_5_NAME,
        MOVIE_6_NAME
        } from '../assets/img_links/ImagesLinks'
export default class BuyTickets extends Component {
    loadMovieCard = () => {
        const movies = [MOVIE_1, MOVIE_2, MOVIE_3, MOVIE_4, MOVIE_5, MOVIE_6]
        let movie_card = movies.map(movie => {
            return (
                <>
                    <div className="buy-movie-img-movie">
                        <img src={movie} alt="movie img"/>
                    </div>
                </>
            )
        })
        return movie_card
    }

    loadMovieDetails = () => {
        const movie_names = [MOVIE_1_NAME, MOVIE_2_NAME, MOVIE_3_NAME, MOVIE_4_NAME, MOVIE_5_NAME, MOVIE_6_NAME]
        let movie_details = movie_names.map(movie_name => {
            return (
                <>
                    <div className="buy-movie-details">
                        <div className="star-rating-container">
                            <img src={FullStarIcon} alt="star1" />
                            <img src={FullStarIcon} alt="star2" />
                            <img src={FullStarIcon} alt="star3" />
                            <img src={HalfStarIcon} alt="star4" />
                            <img src={EmptyStarIcon} alt="star5" />
                        </div>
                        <h2 className="movie-name">{movie_name}</h2>
                        <p className="status">UA</p>
                        <p className="languages">Telugu,Tamil,Kannada</p>
                    </div>
                </>
            )
        })
        return movie_details
    }

    render() {
        return (
            <main className="flex-container auto-adjust buy-tickets-container">
                <div className="languages-container">
                    <button className="lang-btn telugu unselected">Telugu</button>
                    <button className="lang-btn hindi unselected">Hindi</button>
                    <button className="lang-btn english unselected">English</button>
                    <button className="lang-btn malayalam unselected">Malayalam</button>
                </div>
                <h2 className="_p movies-heading">Movies</h2>
                <div className="buy-tickets-moives-container">
                    <NavLink to="/movie-details" className="buy-ticket-movie-img-container">
                        {this.loadMovieCard()}
                    </NavLink>
                    <div className="buy-ticket-movie-details-container">
                        {this.loadMovieDetails()}
                    </div>
                </div>
            </main>
        )
    }
}