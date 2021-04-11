import React, { Component } from 'react'
import CartIcon from '../../assets/tickets_history/shopping_cart.svg'
// import ArrowDown from '../../assets/tickets_history/arrow_down.svg'
import {CHAKRA} from '../../assets/img_links/movies'
import HalfStarIcon from '../../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../../assets/buy_ticket/full_star.svg'
import EmptyStarIcon from '../../assets/buy_ticket/empty_star.svg'
import UserLayout from './UserLayout'

export default class TicketsHistory extends Component {
  render() {
    return (
    <UserLayout>
      <div className="auto-adjust">
        <div className="ticket-history-top-header">
            <div className="mini-heading">
                Resale History
            </div>
            <div className="mini-heading">
                Buy History
            </div>
            <div className="unified-p">
                <span className="unified-p">5pts </span>
                <img src={CartIcon} alt="" className="middle-img ml-1" />
            </div> 
        </div>
        <div className="ticket-history-cards-container">
            <div className="ticket-history-card">
                <div className="img-holder">
                    <img src={CHAKRA} alt="" className="history-img" />
                </div>
                <div className="simple-card-desc">
                    <h2 className="normal_p">CHAKRA</h2>
                    <div className="star-rating-container mg-4">
                        <img src={FullStarIcon} alt="star1" />
                        <img src={FullStarIcon} alt="star2" />
                        <img src={FullStarIcon} alt="star3" />
                        <img src={HalfStarIcon} alt="star4" />
                        <img src={EmptyStarIcon} alt="star5" />
                    </div>
                    <p className="normal_p">AMB Cinema: Gachibowli</p>
                    <p className="normal_p">Telugu</p>
                    <div className="flex-default">
                        <p className="small_p mr-1">5-2</p>
                        <p className="small_p mr-1">28-02-2021</p>
                        <p className="small_p">01:00 PM</p>
                    </div>
                </div>
                <div className="tickets-count">
                    <h1 className="center">2</h1>
                    <p className="normal_p center mb-1">tickets</p>
                </div>
                <div className="ticket-status pending">
                <p className="normal_p">pending...</p>
                </div>
            </div>
            <div className="ticket-history-card">
                <div className="img-holder">
                    <img src={CHAKRA} alt="" className="history-img" />
                </div>
                <div className="simple-card-desc">
                    <h2 className="normal_p">CHAKRA</h2>
                    <div className="star-rating-container mg-4">
                        <img src={FullStarIcon} alt="star1" />
                        <img src={FullStarIcon} alt="star2" />
                        <img src={FullStarIcon} alt="star3" />
                        <img src={HalfStarIcon} alt="star4" />
                        <img src={EmptyStarIcon} alt="star5" />
                    </div>
                    <p className="normal_p">AMB Cinema: Gachibowli</p>
                    <p className="normal_p">Telugu</p>
                    <div className="flex-default">
                        <p className="small_p mr-1">5-2</p>
                        <p className="small_p mr-1">28-02-2021</p>
                        <p className="small_p">01:00 PM</p>
                    </div>
                </div>
                <div className="tickets-count">
                    <h1 className="center">2</h1>
                    <p className="normal_p center mb-1">tickets</p>
                </div>
                <div className="ticket-status pending">
                <p className="normal_p">pending...</p>
                </div>
            </div>
            <div className="ticket-history-card">
                <div className="img-holder">
                    <img src={CHAKRA} alt="" className="history-img" />
                </div>
                <div className="simple-card-desc">
                    <h2 className="normal_p">CHAKRA</h2>
                    <div className="star-rating-container mg-4">
                        <img src={FullStarIcon} alt="star1" />
                        <img src={FullStarIcon} alt="star2" />
                        <img src={FullStarIcon} alt="star3" />
                        <img src={HalfStarIcon} alt="star4" />
                        <img src={EmptyStarIcon} alt="star5" />
                    </div>
                    <p className="normal_p">AMB Cinema: Gachibowli</p>
                    <p className="normal_p">Telugu</p>
                    <div className="flex-default">
                        <p className="small_p mr-1">5-2</p>
                        <p className="small_p mr-1">28-02-2021</p>
                        <p className="small_p">01:00 PM</p>
                    </div>
                </div>
                <div className="tickets-count">
                    <h1 className="center">2</h1>
                    <p className="normal_p center mb-1">tickets</p>
                </div>
                <div className="ticket-status pending">
                <p className="normal_p">pending...</p>
                </div>
            </div>
        </div>
      </div>
      </UserLayout>
    )
  }
}

