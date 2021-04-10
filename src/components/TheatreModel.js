import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ArrowLeft from '../assets/buy_ticket/arrow-back.svg'
import AvailableIcon from '../assets/icons_seat_allotment/available_icon.svg'
import YourSeatsIcon from '../assets/icons_seat_allotment/your_seats_icon.svg'
import NotAvailableIcon from '../assets/icons_seat_allotment/not_available_icon.svg'
import TicketsIcon from '../assets/icons_seat_allotment/tickets_icon.svg'
import UserLayout from './UserLayout'
export default class TheatreModel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seatCount: 0,
            totalMoney: null,
            toggleAction: false,
        }
    }

    componentDidMount() {
        this.setState({
            seatCount: 0,
            toggleAction: true
        })
    }

    handleClick = (e) => {
        if(e.target.checked) {
            this.setState({
                seatCount: this.state.seatCount + 1,
                toggleAction: !this.state.toggleAction,
                totalMoney: ((parseFloat(this.state.seatCount) * 120) + 120).toString()+".00"
            })
            
        } else {
            this.setState({
                seatCount: this.state.seatCount - 1,
                toggleAction: !this.state.toggleAction,
                totalMoney: ((parseFloat(this.state.seatCount) * 120) - 120).toString()+".00"
            })
        }
        
    }
    
    componentDidUpdate() {
        // console.log(this.state.seatCount, this.state.toggleAction)
    }

    updateTicketCount() {
        if(this.state.toggleAction) {
            return <h3 className="small_p _80_color">{this.state.seatCount} tickets</h3>
        } else {
            return <h3 className="small_p _80_color">{this.state.seatCount} tickets</h3>
        }

    }

    render() {
        return (
            <UserLayout>
                <div className="fixed-page">
                    <div className="auto-adjust-vertical theatre-model-header">
                        <div className="theatre-details-top">
                            <div className="back-link">
                                <NavLink to="/movie-details">
                                    <img src={ArrowLeft} alt="" className="theatre-back-icon" />
                                </NavLink>
                            </div>
                            <div className="theatre-info">
                                <h2 className="__h1 _80_color normal_p">
                                    AMB Cinema: Gachibowli
                                </h2>
                                <p className="small_p">Sun 28 feb</p>
                                <div className="">
                                    <button className="theatre-model-btn mr-2">
                                        <NavLink to="/theatre-model" className="make-link">
                                            1:00PM
                                        </NavLink>
                                    </button>
                                    <button className="theatre-model-btn mr-2">
                                        <NavLink to="/theatre-model" className="make-link">
                                            4:00PM
                                        </NavLink>
                                    </button>
                                    <button className="theatre-model-btn mr-2">
                                        <NavLink to="/theatre-model" className="make-link">
                                            6:00PM
                                        </NavLink>
                                    </button>
                                    <button className="theatre-model-btn mr-2">
                                        <NavLink to="/theatre-model" className="make-link">
                                            10:00PM
                                        </NavLink>
                                    </button>
                                </div>
                                <div className="flex-default">
                                    {this.updateTicketCount()}
                                    <img src={TicketsIcon} alt="" className="ml-1" />
                                </div>
                            </div>
                            <div className="seats-status-container">
                                <div className="seat-icon-div">
                                    <img src={NotAvailableIcon} alt="" />
                                    <p className="small_p _80_color">Not available</p>
                                </div>
                                <div className="seat-icon-div">
                                    <img src={AvailableIcon} alt="" />
                                    <p className="small_p _80_color">Available</p>
                                </div>
                                <div className="seat-icon-div">
                                    <img src={YourSeatsIcon} alt="" />
                                    <p className="small_p _80_color">Your seats</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="theatre-seating-model-container">
                        <div className="seats-grid-container">
                            <div className="grids front-seats-grid">
                                <div className="left-sub-seats">
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 available-seat" onClick={this.handleClick} name="seat" />
                                </div>
                                <div className="right-sub-seats">
                                <input type="checkbox" className="seat-icon first-seat" />
                                    <input type="checkbox" className="seat-icon mr-1 unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1 available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon mr-1" name="seat" />
                                </div>
                            </div>
                            <div className="grids middle-seats-grid">
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                </div>
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                </div>
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    </div>
                                </div>
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                </div>
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                </div>
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                </div>
                                <div className="grid-row">    
                                    <div className="left-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                    <div className="right-sub-seats">
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                        <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    </div>
                                </div>
                            </div>
                            <div className="grids top-most-seats-grid">
                                <div className="sub-seats grid-row">
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                </div>
                                <div className="sub-seats grid-row">
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon available-seat" onClick={this.handleClick} name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                    <input type="checkbox" className="seat-icon unavailable-seat" name="seat" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-ticket-payment-btn-container">
                        <button className="book-ticket-payment-btn apply-cursor">
                            Book : {this.state.totalMoney}
                        </button>
                    </div>
                </div>
            </UserLayout>
        )
    }
}