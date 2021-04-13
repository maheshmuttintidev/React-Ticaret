import React, { Component, createRef } from 'react'
import BookedTicketIcon from '../../assets/header_menu/booked_ticket.svg'
import TicketHistoryIcon from '../../assets/header_menu/ticket_history.svg'
import AboutUsIcon from '../../assets/header_menu/aboutus.svg'
import SettingsIcon from '../../assets/header_menu/setting.svg'
import { NavLink } from 'react-router-dom'

const profileMenuRef = createRef()

class ProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ""
    }
  }

  closeProfileMenu = () => {
    profileMenuRef.current.style.display = "none"
  }
  
  render() {
    return (
      <div onClick={this.closeProfileMenu} ref={profileMenuRef} className="overlay-fixed profile-container">
        <div className="menu-container">
          <div className="menu-top-bar flex-row">
            <p className="greet_p">Hii... {this.state.username}</p>
            <NavLink to="/login" className="menu-login-btn">Login</NavLink>
          </div>
          <div className="menu-options">
            <ul className="menu-options-container">
              <li className="option option1">
                <img loading="lazy" src={BookedTicketIcon} alt="booked tickets" />
                <span className="menu-option notification">Booked Ticket</span>
              </li>
              <li className="option option2">
                <img loading="lazy" src={TicketHistoryIcon} alt="ticket history" />
                <span className="menu-option ticket-hist">Ticket History</span>
              </li>
              <li className="option option3">
                <img loading="lazy" src={AboutUsIcon} alt="about us" />
                <span className="menu-option about-us">About Us</span>
              </li>
              <li className="option option4">
                <img loading="lazy" src={SettingsIcon} alt="settings" />
                <span className="menu-option settings">Settings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMenu
