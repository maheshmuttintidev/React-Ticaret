import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
export default class ResaleTicketFilling extends Component {
    render() {
        return (
            <div className="auto-adjust">
                <div className="resale-form-container">
                    <h2 className="normal_p _80_color normal_font normalized-font-size">Resale your ticket</h2>
                    <form className="resale-ticket-filling-form">
                        <div className="input-field-container select-container">
                            <select className="input-field auto-width select" name="theatreName">
                                <option value="Select theater" className="normal_font">Select theater</option>
                                <option value="AMB Cinema: Gachibowli" className="normal_font">AMB Cinema: Gachibowli</option>
                            </select>
                        </div>
                        <div className="input-field-container">
                            <input className="input-field auto-width" type="text" name="movieName" placeholder="Movie Name"/>
                        </div>
                        <div className="flex-date-time input-field-container">
                            <div className="date-time-field">
                                <label for="" className="normal_p _80_color">Date</label><br />
                                <input className="input-field date-field" name="date" type="date" />
                            </div>
                            <div className="date-time-field">
                                <label for="" className="normal_p _80_color">Show time</label><br />
                                <input className="input-field time-field" name="time" type="time" />
                            </div>
                        </div>
                        <div className="file-input-field-container input-field-container">
                            <input className="input-field auto-width custom-file-input" type="file" name="ticketFile" />
                        </div>
                        <div className="input-field-container">
                            <label for="heading-tag" className="normal_p _80_color">No of persons in ticket &nbsp;&nbsp;- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No of tickets to sold</label>
                            <div className="">
                                <input className="input-field ticaret-input-field small-width" type="number" name="noOfPersons" placeholder="available" />
                                <span className="seperator"> - </span>
                                <input className="input-field ticaret-input-field small-width" type="number" name="noOfTickets" placeholder="want to sale" />
                            </div>
                        </div>
                        <div className="input-field-container">
                            <input className="input-field" name="totalAmount" type="number" placeholder="Price per ticket"/>
                        </div>
                        <div className="resale-btn-container">
                            <NavLink to="/tickets-history" className="form-btn form-btn-ticket-form normal_p">Resale tickets</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}