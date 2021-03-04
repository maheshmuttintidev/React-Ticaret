import React, { Component } from "react"

import ResaleTicketIcon from '../assets/body/resale.svg'
import BuyOurTicket from '../assets/body/buy_our_ticket.svg'
import GetOurTicket from '../assets/body/getour_ticket.svg'
import NetflixIcon from '../assets/body/netflex.svg'
import PrimeVideoIcon from '../assets/body/prime_video.svg'
import BookMyShowIcon from '../assets/body/bookmyshow.svg'
import AhaIcon from '../assets/body/aha.svg'
class Home extends Component {
  render() {
    return (
     <main>
         <section className="container hero-container">
            <aside className="resale-ticket">
                <h2 className="__h1">
                    Wanna Sell your Ticket?
                </h2>
                <p className="__p">
                    sell your tickets us in a easier way and get more points.
                </p>
                <button className="btn btn-resale">
                    Resale Your Ticket
                </button>
            </aside>
            <aside className="buy-ticket">
                <h2 className="__h1">
                    Buy your valuable Ticket
                </h2>
                <p className="__p">
                    Get your tickets, chill with your show and your security is our priority.
                </p>
                <button className="btn btn-buy">
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
                    <div className="movie1 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://d1ydle56j7f53e.cloudfront.net/assets/gallery/movie/chakra-13939/misc-big/chakra-2.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Chakra</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu,Tamil,Kannada</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie2 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://content.tupaki.com/twdata/2020/0620/photos/movies/Allari%20Naresh%20Nandi%20Character%20Introduction%20posters/normal/Allari%20Naresh%20Nandi%20Character%20Introduction%20posters_2.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Naandhi</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie3 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://www.seelatest.com/images/poster/zombie-reddy.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Zombie Reddy</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie4 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://animatedviews.com/wp-content/uploads/2020/12/t-and-j-1.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Tom and Jerry</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu,English</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie5 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://cdn.gulte.com/wp-content/uploads/2020/08/Sumanth.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Kapatadhari</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu,English</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie6 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://indianmovieradar.com/wp-content/uploads/2020/02/Uppena-Poster-3.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Uppena</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie7 movie-cards-container">
                        <div className="img-movie">
                            <img src="https://1.bp.blogspot.com/-uPERbFZSDms/XiBZVq5VUYI/AAAAAAAAQFA/UMoo8OhZL7ULN5w8GfROSH3divF94qQCACLcBGAsYHQ/s1600/Krack-telugu-movie-star-cast-release-date-poster.jpg" alt="movie img" />
                            <div className="rating">
                                
                            </div>
                            <div className="movie-details">
                                <h2 className="movie-name">Krack</h2>
                                <p className="status">UA</p>
                                <p className="languages">Telugu</p>
                            </div>
                        </div>
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
    );
  }
}

export default Home;