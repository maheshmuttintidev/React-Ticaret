import React, {Component} from 'react'
import UserLayout from './UserLayout'
import Image from '../../assets/movies/khiladi hero.jpg'
import Clock from '../../assets/tickets_history/clock.svg'
import Calender from '../../assets/tickets_history/calender_icon.svg'
import RowChairs from '../../assets/tickets_history/row_chairs.svg'
import TicketRow from '../../assets/tickets_history/ticket_row.svg'
import QrCode from '../../assets/tickets_history/qr_code.svg'

export default class UserTicaretTicket extends Component {

    render() {
        return (
            <UserLayout>
                <div className="flex-column center clear-both min-100-height">
                    <div className="ticket-bg-wrapper relative">
                        <img loading="lazy" src={Image} alt="Booked Ticket Movie" className="booked-ticket-posture-img" />
                        <div className="adapted-ones flex-column center first-part">
                            <div>
                                <h3 className="text-left">Khiladi</h3>
                                <p className="normal-p text-left">Telugu - 2D</p>
                            </div>
                            <div>
                                <h3 className="text-left">AMB Cinema: Gachibowli</h3>
                                <p className="very-small-font-size text-left">
                                    Gachibowli - Miyapur Rd, Whitefields,
                                    Kothaguda, Telangana 500084
                                </p>
                            </div>
                            <h4 className="text-left">
                                Rs.200
                            </h4>
                        </div>
                        <div className="adapted-ones flex-column center second-part">
                            <div className="w-5 flex-row date-container">     
                                <img loading="lazy" src={Calender} alt="this is" />
                                <div className="ml-1 default-size flex-row">   
                                    <span>Date</span>
                                    <span className="ml-3">28 Feb Sun</span>
                                </div>
                            </div>
                            <div className="w-5 flex-row time-container">     
                                <img loading="lazy" src={Clock} alt="this is" />
                                <div className="ml-1 default-size flex-row">   
                                    <span>Time</span>
                                    <span className="ml-5">01:00 PM</span>
                                </div>
                            </div>
                            <div className="w-5 flex-row row-container">     
                                <img loading="lazy" src={TicketRow} alt="this is" />
                                <div className="ml-1 default-size flex-row">   
                                    <span>Row</span>
                                    <span className="ml-7">P1,P2</span>
                                </div>
                            </div>
                            <div className="w-5 flex-row seats-container">     
                                <img loading="lazy" src={RowChairs} alt="this is" />
                                <div className="ml-1 default-size flex-row">   
                                    <span>Seats</span>
                                    <span className="ml-8">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="adapted-ones flex-column center third-part">
                            <p>2<br />Tickets</p>
                            <div className="qr-container">
                                <img loading="lazy" src={QrCode} alt="this is the" />
                                <p>WP5BQ95</p>
                            </div>
                        </div>
                        <div className="booked-stamp-holder">
                            <span className="booked-stamp-span">Booked</span>
                        </div>
                    </div>
                    <button className="form-btn transparent-bg align-self-start ml-16">Cancel</button>
                </div>
            </UserLayout>
        )
    }
}