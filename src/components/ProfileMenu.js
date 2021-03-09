import React, { Component } from 'react'
import NotificationIcon from '../assets/header_menu/bell.svg'
import TicketHistoryIcon from '../assets/header_menu/ticket_history.svg'
import AboutUsIcon from '../assets/header_menu/aboutus.svg'
import CustomerHelpIcon from '../assets/header_menu/customer.svg'
import SettingsIcon from '../assets/header_menu/setting.svg'
import { NavLink } from 'react-router-dom'


class ProfileMenu extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: "Mahesh"
    }
  }
  
  render() {
    // console.log(window.location.pathname)
    return (
      <div className="overlay-fixed profile-container">
        <div className="menu-container">
          <div className="menu-top-bar flex-row">
            <p className="greet_p">Hii... {this.state.username}</p>
            <button className="menu-login-btn" onClick={this.goToLogin}>Login</button>
          </div>
          <div className="menu-options">
            <ul className="menu-options-container">
              <li className="option option1">
                <img src={NotificationIcon} alt="notifications" />
                <NavLink to="/login">Notifications</NavLink>
              </li>
              <li className="option option2">
                <img src={TicketHistoryIcon} alt="ticket history" />
                <NavLink to="/login">Ticket History</NavLink>
              </li>
              <li className="option option3">
                <img src={AboutUsIcon} alt="about us" />
                <NavLink to="/login">About Us</NavLink>
              </li>
              <li className="option option4">
                <img src={CustomerHelpIcon} alt="customer help" />
                <NavLink to="/login">Customer Help</NavLink>
              </li>
              <li className="option option5">
                <img src={SettingsIcon} alt="settings" />
                <NavLink to="/login">Settings</NavLink>
              </li>
              <li className="option-close option6">
                <span>Close</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMenu
