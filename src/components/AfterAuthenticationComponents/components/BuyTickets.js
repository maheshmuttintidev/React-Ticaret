import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import HalfStarIcon from '../../../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../../../assets/buy_ticket/full_star.svg'
import EmptyStarIcon from '../../../assets/buy_ticket/empty_star.svg'
import {Movies as movies} from '../../../assets/img_links/ImagesLinks'
import UserLayout from '../layout/UserLayout'
export default class BuyTickets extends Component {
    loadMovieCard = () => {
        let movie_card = movies.map(movie => {
            return (
                <>
                    <div key={movie.id} className="buy-movie-img-movie">
                        <img loading="lazy" src={movie.img_url} alt="movie img"/>
                    </div>
                </>
            )
        })
        return movie_card
    }

    loadMovieDetails = () => {
        let movie_details = movies.map(movie => {
            return (
                <>
                    <div key={movie.id} className="buy-movie-details">
                        <div className="star-rating-container">
                            <img loading="lazy" src={FullStarIcon} alt="star1" />
                            <img loading="lazy" src={FullStarIcon} alt="star2" />
                            <img loading="lazy" src={FullStarIcon} alt="star3" />
                            <img loading="lazy" src={HalfStarIcon} alt="star4" />
                            <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                        </div>
                        <h2 className="movie-name">{movie.name}</h2>
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
            <UserLayout>
                <main className="flex-container auto-adjust buy-tickets-container">
                    <div className="languages-container">
                        <button className="lang-btn telugu unselected">Telugu</button>
                        <button className="lang-btn hindi unselected">Hindi</button>
                        <button className="lang-btn english unselected">English</button>
                        <button className="lang-btn malayalam unselected">Malayalam</button>
                    </div>
                    <h2 className="_p movies-heading">Movies</h2>
                    <div className="buy-tickets-moives-container">
                        <NavLink to="/user/movie-details" className="buy-ticket-movie-img-container">
                            {this.loadMovieCard()}
                        </NavLink>
                        <div className="buy-ticket-movie-details-container">
                            {this.loadMovieDetails()}
                        </div>
                    </div>
                </main>
            </UserLayout>
        )
    }
}