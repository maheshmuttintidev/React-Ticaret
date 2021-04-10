import React, { Component } from 'react'
import BookedTicketIcon from '../assets/header_menu/booked_ticket.svg'
import TicketHistoryIcon from '../assets/header_menu/ticket_history.svg'
import AboutUsIcon from '../assets/header_menu/aboutus.svg'
import SettingsIcon from '../assets/header_menu/setting.svg'
import { NavLink } from 'react-router-dom'


class UserProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: sessionStorage.getItem("name")
    }
  }
  
  render() {
    return (
      <div className="overlay-fixed profile-container">
        <div className="menu-container">
          <div className="menu-top-bar flex-row">
            <p className="greet_p">Hii... {this.state.username}</p>
          </div>
          <div className="menu-options">
            <ul className="menu-options-container">
              <li className="user-option option1">
                <img src={BookedTicketIcon} alt="booked tickets" />
                <span className="user-menu-option notification">Booked Ticket</span>
              </li>
              <li className="user-option option2">
                <img src={TicketHistoryIcon} alt="ticket history" />
                <span className="user-menu-option ticket-hist">Ticket History</span>
              </li>
              <li className="user-option option3">
                <img src={AboutUsIcon} alt="about us" />
                <span className="user-menu-option about-us">About Us</span>
              </li>
              <li className="user-option option4">
                <img src={SettingsIcon} alt="settings" />
                <span className="user-menu-option settings">Settings</span>
              </li>
              <li className="option-close option6">
                <NavLink to="/user" className="span">Close</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfileMenu
