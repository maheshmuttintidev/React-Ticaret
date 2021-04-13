import React, { Component, createRef } from 'react'
import BookedTicketIcon from '../../assets/tickets_history/tickets_two.svg'
import TicketHistoryIcon from '../../assets/tickets_history/ticket_history.svg'
import AboutUsIcon from '../../assets/tickets_history/about_us.svg'
import SettingsIcon from '../../assets/tickets_history/settings.svg'
import {NavLink} from 'react-router-dom'

const profileMenuRef = createRef()
export default class UserProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: sessionStorage.getItem("name"),
      isTokenAvailable: sessionStorage.getItem("token") ? true : false
    }
  }

  // componentDidMount() {
  //   if(this.state.isTokenAvailable) {
  //     this.props.history.push('/user')
  //     console.log("token is present")
  //   } else {
  //     this.props.history.push('/')
  //     console.log("token is not present")
  //   }
  // }
  
  logoutUser = () => {
    if(this.state.isTokenAvailable) {
      sessionStorage.clear()
      this.props.history.push('/')
    } else {
      this.props.history.push('/user')
    }
  }

  closeProfileMenu = () => {
    profileMenuRef.current.style.display = "none"
  }

  render() {
    return (
      <div onClick={this.closeProfileMenu} ref={profileMenuRef} className="overlay-fixed profile-container">
        <div className="user-menu-container">
          <span onClick={this.closeProfileMenu} className="close-icon">&times;</span>
          <div className="menu-top-bar flex-row">
            <p className="greet_p">Hii... {this.state.username}</p>
          </div>
          <div className="menu-options">
            <ul className="menu-options-container">
              <li className="user-option option1">
                <img loading="lazy" src={BookedTicketIcon} alt="booked tickets" />
                <NavLink to="/user-ticaret-ticket" className="user-menu-option remove-underline notification">Booked Ticket</NavLink>
              </li>
              <li className="user-option option2">
                <img loading="lazy" src={TicketHistoryIcon} alt="ticket history" />
                <NavLink to="/tickets-history" className="user-menu-option remove-underline ticket-hist">Ticket History</NavLink>
              </li>
              <li className="user-option option3">
                <img loading="lazy" src={AboutUsIcon} alt="about us" />
                <NavLink to="/about-us" className="user-menu-option remove-underline about-us">About Us</NavLink>
              </li>
              <li className="user-option option4">
                <img loading="lazy" src={SettingsIcon} alt="settings" />
                <NavLink to="/update-profile" className="user-menu-option remove-underline settings">Settings</NavLink>
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