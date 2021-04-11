import ResaleTicketIcon from '../../assets/body/resale.svg'
import BuyOurTicket from '../../assets/body/buy_our_ticket.svg'
import GetOurTicket from '../../assets/body/getour_ticket.svg'
import NetflixIcon from '../../assets/body/netflex.svg'
import PrimeVideoIcon from '../../assets/body/prime_video.svg'
import BookMyShowIcon from '../../assets/body/bookmyshow.svg'
import AhaIcon from '../../assets/body/aha.svg'
import HalfStarIcon from '../../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../../assets/buy_ticket/full_star.svg'
import {Movies as movies} from '../../assets/img_links/ImagesLinks'
import EmptyStarIcon from '../../assets/buy_ticket/empty_star.svg'
import React, { Component } from "react"
// import {NavLink} from 'react-router-dom'
import Layout from './Layout'

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isTokenAvailable: sessionStorage.getItem("token") ? true : false
      }
    }
    
    componentDidMount() {
        console.log(this.state.isTokenAvailable)
    }

    checkAuth = () => {
        if(this.state.isTokenAvailable) {
            this.props.history.push('/user')
        } else {
            this.props.history.push('/login')
        }
    }

    loadMovieCard = () => {
        let movie_card = movies.map(movie => {
            return (
                <div key={movie.id}>
                    <div className="img-movie">
                        <img src={movie.img_url} alt="movie img"/>
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
                        <img src={FullStarIcon} alt="star1" />
                        <img src={FullStarIcon} alt="star2" />
                        <img src={FullStarIcon} alt="star3" />
                        <img src={HalfStarIcon} alt="star4" />
                        <img src={EmptyStarIcon} alt="star5" />
                    </div>
                    <h2 className="movie-name">{movie.name}</h2>
                    <p className="status">UA</p>
                    <p className="languages">Telugu,Tamil,Kannada</p>
                </div>
            )
        })
        return movie_details
    }

    render() {
        return (
            <Layout>
                <main>
                    <section className="container hero-container">
                        <aside className="resale-ticket">
                            <h2 className="__h0">
                                Wanna Sell your Ticket?
                            </h2>
                            <p className="__p">
                                sell your tickets with us in a easier way and get more points.
                            </p>
                            <button onClick={this.checkAuth} className="btn btn-resale">
                                Resale Your Ticket
                            </button>
                        </aside>
                        <aside className="buy-ticket">
                            <h2 className="__h0">
                                Buy your valuable Ticket
                            </h2>
                            <p className="__p">
                                Get your tickets, chill with your show and your security is our priority.
                            </p>
                            <button onClick={this.checkAuth} className="btn btn-buy">
                                Buy Our Ticket
                            </button>
                        </aside>
                    </section>
                    <section className="route-map-container">
                        <div className="working-heading">
                            <h1 className="__h1">How it works</h1>
                        </div>
                        <div className="flow-map-container">
                            <div className="steps step-one">
                                <img src={ResaleTicketIcon} alt="reselling ticket" />
                                <p className="title resale-title">
                                    Reselling tickets
                                </p>
                                <p className="description resale-description">
                                    sell your ticket you will refund money with <span className="mark">70%</span> amount as per ticket
                                </p>
                            </div>
                            <div className="steps step-two">
                                <img src={BuyOurTicket} alt="buy our ticket" />
                                <p className="title buy-ticket-title">
                                    Buy our ticket
                                </p>
                                <p className="description resale-description">
                                    buy our ticket from our <span className="mark">sellers of ticket</span> with secure and available location of thearters
                                </p>
                            </div>
                            <div className="steps step-three">
                                <img src={GetOurTicket} alt="get your ticket" />
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
                                <img src={BookMyShowIcon} alt="partners avatars" />
                            </div>
                            <div className="logo_p logo2">
                                <img src={PrimeVideoIcon} alt="partners avatars" />
                            </div>
                            <div className="logo_p logo3">
                                <img src={NetflixIcon} alt="partners avatars" />
                            </div>
                            <div className="logo_p logo4">
                                <img src={AhaIcon} alt="partners avatars" />
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        );
    }
}

export default Home