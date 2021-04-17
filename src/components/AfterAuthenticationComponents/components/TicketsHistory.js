import React, { Component } from 'react'
import CartIcon from '../../../assets/tickets_history/shopping_cart.svg'
import ArrowDown from '../../../assets/tickets_history/arrow_down.svg'
import { CHAKRA } from '../../../assets/img_links/movies'
import HalfStarIcon from '../../../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../../../assets/buy_ticket/full_star.svg'
import EmptyStarIcon from '../../../assets/buy_ticket/empty_star.svg'
import GiftIcon from '../../../assets/resale_tickets/gift_icon.svg'
import UserLayout from '../layout/UserLayout'

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
                            <span className="unified-p">5pts</span>
                            <img loading="lazy" src={CartIcon} alt="" className="middle-img ml-1" />
                        </div>
                    </div>
                    <div className="ticket-history-cards-container">
                        <div className="ticket-history-card">
                            <div className="img-holder">
                                <img loading="lazy" src={CHAKRA} alt="" className="history-img" />
                            </div>
                            <div className="simple-card-desc">
                                <h2 className="normal_p">CHAKRA</h2>
                                <div className="star-rating-container mg-4">
                                    <img loading="lazy" src={FullStarIcon} alt="star1" />
                                    <img loading="lazy" src={FullStarIcon} alt="star2" />
                                    <img loading="lazy" src={FullStarIcon} alt="star3" />
                                    <img loading="lazy" src={HalfStarIcon} alt="star4" />
                                    <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                                </div>
                                <p className="normal_p">AMB Cinema: Gachibowli</p>
                                <p className="normal_p">Telugu</p>
                                <div className="flex-default ml-8">
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
                                <p className="normal_p pure-warning-color">pending...</p>
                            </div>
                        </div>
                        <div className="ticket-history-card">
                            <div className="img-holder">
                                <img loading="lazy" src={CHAKRA} alt="" className="history-img" />
                            </div>
                            <div className="simple-card-desc">
                                <h2 className="normal_p">CHAKRA</h2>
                                <div className="star-rating-container mg-4">
                                    <img loading="lazy" src={FullStarIcon} alt="star1" />
                                    <img loading="lazy" src={FullStarIcon} alt="star2" />
                                    <img loading="lazy" src={FullStarIcon} alt="star3" />
                                    <img loading="lazy" src={HalfStarIcon} alt="star4" />
                                    <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                                </div>
                                <p className="normal_p">AMB Cinema: Gachibowli</p>
                                <p className="normal_p">Telugu</p>
                                <div className="flex-default ml-8">
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
                                <p className="normal_p success-color">2 tickets sold</p>
                            </div>
                            <div className="expand-details-container">
                                <div className="expand-icon-container apply-cursor">
                                    <img loading="lazy" src={ArrowDown} alt="arrow down icon" />
                                </div>
                            </div>
                        </div>
                        <div className="ticket-history-card">
                            <div className="img-holder">
                                <img loading="lazy" src={CHAKRA} alt="" className="history-img" />
                            </div>
                            <div className="simple-card-desc">
                                <h2 className="normal_p">CHAKRA</h2>
                                <div className="star-rating-container mg-4">
                                    <img loading="lazy" src={FullStarIcon} alt="star1" />
                                    <img loading="lazy" src={FullStarIcon} alt="star2" />
                                    <img loading="lazy" src={FullStarIcon} alt="star3" />
                                    <img loading="lazy" src={HalfStarIcon} alt="star4" />
                                    <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                                </div>
                                <p className="normal_p">AMB Cinema: Gachibowli</p>
                                <p className="normal_p">Telugu</p>
                                <div className="flex-default ml-8">
                                    <p className="small_p mr-1">5-2</p>
                                    <p className="small_p mr-1">28-02-2021</p>
                                    <p className="small_p">01:00 PM</p>
                                </div>
                            </div>
                            <div className="tickets-count">
                                <h1 className="center">1</h1>
                                <p className="normal_p center mb-1">tickets</p>
                            </div>
                            <div className="ticket-status pending">
                                <p className="normal_p success-color">1 ticket sold</p>
                            </div>
                            <div className="expand-details-container">
                                <div className="none">
                                    <img src={GiftIcon} alt="" />
                                </div>
                                <div className="expand-icon-container apply-cursor">
                                    <img loading="lazy" src={ArrowDown} alt="arrow down icon" />
                                </div>
                            </div>
                        </div>
                        <div className="ticket-history-card">
                            <div className="img-holder">
                                <img loading="lazy" src={CHAKRA} alt="" className="history-img" />
                            </div>
                            <div className="simple-card-desc">
                                <h2 className="normal_p">CHAKRA</h2>
                                <div className="star-rating-container mg-4">
                                    <img loading="lazy" src={FullStarIcon} alt="star1" />
                                    <img loading="lazy" src={FullStarIcon} alt="star2" />
                                    <img loading="lazy" src={FullStarIcon} alt="star3" />
                                    <img loading="lazy" src={HalfStarIcon} alt="star4" />
                                    <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                                </div>
                                <p className="normal_p">AMB Cinema: Gachibowli</p>
                                <p className="normal_p">Telugu</p>
                                <div className="flex-default ml-8">
                                    <p className="small_p mr-1">5-2</p>
                                    <p className="small_p mr-1">28-02-2021</p>
                                    <p className="small_p">01:00 PM</p>
                                </div>
                            </div>
                            <div className="tickets-count">
                                <h1 className="center">0</h1>
                                <p className="normal_p center mb-1">tickets</p>
                            </div>
                            <div className="ticket-status pending">
                                <p className="normal_p pure-cause-color">Tickets are unsold</p>
                            </div>
                            <div className="expand-details-container">
                                <div className="expand-icon-container apply-cursor">
                                    <img loading="lazy" src={ArrowDown} alt="arrow down icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        )
    }
}

