import React, { Component, createRef } from 'react'
import BookedTicketIcon from '../../../assets/tickets_history/tickets_two.svg'
import TicketHistoryIcon from '../../../assets/tickets_history/ticket_history.svg'
import AboutUsIcon from '../../../assets/tickets_history/about_us.svg'
import SettingsIcon from '../../../assets/tickets_history/settings.svg'
import ProfileGravatar from '../../../assets/register/user_profile_icon.svg'
import {NavLink} from 'react-router-dom'
import auth from '../../../auth/auth'
const profileMenuRef = createRef()

export default class UserProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: sessionStorage.getItem("name"),
      isTokenAvailable: sessionStorage.getItem("token") ? true : false
    }
  }

  
  logoutUser = () => {
    auth.logout(() => {
      this.props.history.push('/')
    })
  }

  closeProfileMenu = () => {
    profileMenuRef.current.style.display = "none"
  }

  render() {
    return (
      <div onClick={this.closeProfileMenu} ref={profileMenuRef} className="overlay-fixed profile-container">
        <div className="user-menu-container">
          <div className="menu-top-bar flex-row">
            <p className="greet_p">Hii... {this.state.username}</p>
            <img src={ProfileGravatar} alt="profile icon" className="mr-2" />
          </div>
          <div className="menu-options">
            <ul className="menu-options-container">
              <li className="user-option active-spark option1">
                <img loading="lazy" src={BookedTicketIcon} alt="booked tickets" />
                <NavLink to="/user/ticaret-ticket" className="user-menu-option remove-underline notification">Booked Tickets</NavLink>
              </li>
              <li className="user-option active-spark option2">
                <img loading="lazy" src={TicketHistoryIcon} alt="ticket history" />
                <NavLink to="/user/tickets-history" className="user-menu-option remove-underline ticket-hist">Ticket History</NavLink>
              </li>
              <li className="user-option active-spark option3">
                <img loading="lazy" src={AboutUsIcon} alt="about us" />
                <NavLink to="/about-us" className="user-menu-option remove-underline about-us">About Us</NavLink>
              </li>
              <li className="user-option active-spark option4">
                <img loading="lazy" src={SettingsIcon} alt="settings" />
                <NavLink to="/user/update-profile" className="user-menu-option remove-underline settings">Settings</NavLink>
              </li>
              <li className="option-logout option6 differ-btn">
                <button onClick={this.logoutUser} className="span">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}