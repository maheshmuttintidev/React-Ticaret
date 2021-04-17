import React, { Component } from 'react'
import UserLayout from './UserLayout'
import ResaleTicketIcon from '../../assets/body/resale.svg'
import BuyOurTicket from '../../assets/body/buy_our_ticket.svg'
import GetOurTicket from '../../assets/body/getour_ticket.svg'
import NetflixIcon from '../../assets/body/netflex.svg'
import PrimeVideoIcon from '../../assets/body/prime_video.svg'
import BookMyShowIcon from '../../assets/body/bookmyshow.svg'
import AhaIcon from '../../assets/body/aha.svg'
import HalfStarIcon from '../../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../../assets/buy_ticket/full_star.svg'
import { Movies as movies } from '../../assets/img_links/ImagesLinks'
import EmptyStarIcon from '../../assets/buy_ticket/empty_star.svg'
import { NavLink } from 'react-router-dom'
// import queryString from 'query-string'

export default class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTokenAvailable: sessionStorage.getItem("token") ? true : false
        }
    }

    loadMovieCard = () => {
        let movie_card = movies.map(movie => {
            return (
                <div key={movie.id}>
                    <div className="img-movie">
                        <img onClick={this.redirectToMovieDetails} loading="lazy" src={movie.img_url} alt="movie img" />
                    </div>
                </div>
            )
        })
        return movie_card
    }

    loadMovieDetails = () => {
        let movie_details = movies.map(movie => {
            return (
                <div key={movie.id} className="movie-details">
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
            )
        })
        return movie_details
    }
    redirectToMovieDetails = () => {
        this.props.history.push('/movie-details')
    }

    componentDidMount() {
        //    console.log(queryString.parse(this.props.location.search))
        //    console.log(this.props.location.search)

    }
    render() {
        return (
            <UserLayout>
                <main>
                    <section className="container hero-container">
                        <aside className="resale-ticket">
                            <h2 className="__h0">
                                Wanna Sell your Ticket?
                </h2>
                            <p className="__p">
                                sell your tickets with us in a easier way and get more points.
                </p>
                            <NavLink to="/user/resale-ticket-filling" className="btn btn-resale">
                                Resale Your Ticket
                </NavLink>
                        </aside>
                        <aside className="buy-ticket">
                            <h2 className="__h0">
                                Buy your valuable Ticket
                </h2>
                            <p className="__p">
                                Get your tickets, chill with your show and your security is our priority.
                </p>
                            <NavLink to="/user/buy-tickets" className="btn btn-buy">
                                Buy Our Ticket
                </NavLink>
                        </aside>
                    </section>
                    <section className="route-map-container">
                        <div className="working-heading">
                            <h1 className="__h1">How it works</h1>
                        </div>
                        <div className="flow-map-container">
                            <div className="steps step-one">
                                <img loading="lazy" src={ResaleTicketIcon} alt="reselling ticket" />
                                <p className="title resale-title">
                                    Reselling tickets
                    </p>
                                <p className="description resale-description">
                                    sell your ticket you will refund money with <span className="mark">70%</span> amount as per ticket
                    </p>
                            </div>
                            <div className="steps step-two">
                                <img loading="lazy" src={BuyOurTicket} alt="buy our ticket" />
                                <p className="title buy-ticket-title">
                                    Buy our ticket
                    </p>
                                <p className="description resale-description">
                                    buy our ticket from our <span className="mark">sellers of ticket</span> with secure and available location of thearters
                    </p>
                            </div>
                            <div className="steps step-three">
                                <img loading="lazy" src={GetOurTicket} alt="get your ticket" />
                                <p className="title get-ticket-title">
                                    Get your ticket
                    </p>
                                <p className="description resale-description">
                                    after buying the ticket we will provide <span className="mark">ticket with our logo</span> in softcopy through message or email which you will shown in thearters.
                    </p>
                            </div>
                        </div>
                    </section>
                    <section className="movies-container">
                        <div className="movie-heading">
                            <h1 className="__h1">Movies</h1>
                        </div>
                        <div className="mcontainer">
                            <div className="movies_container">
                                <div className="movie-cards-container">
                                    {this.loadMovieCard()}
                                </div>
                                <div className="movie-details-container">
                                    {this.loadMovieDetails()}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="partners-container">
                        <h2 className="__h1 partners-heading">Partners</h2>
                        <div className="logos-container">
                            <div className="logo_p logo1">
                                <img loading="lazy" src={BookMyShowIcon} alt="partners avatars" />
                            </div>
                            <div className="logo_p logo2">
                                <img loading="lazy" src={PrimeVideoIcon} alt="partners avatars" />
                            </div>
                            <div className="logo_p logo3">
                                <img loading="lazy" src={NetflixIcon} alt="partners avatars" />
                            </div>
                            <div className="logo_p logo4">
                                <img loading="lazy" src={AhaIcon} alt="partners avatars" />
                            </div>
                        </div>
                    </section>
                </main>
            </UserLayout>
        )
    }
}
