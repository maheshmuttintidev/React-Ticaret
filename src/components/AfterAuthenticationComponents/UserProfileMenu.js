import React, { Component } from 'react'
import BookedTicketIcon from '../../assets/tickets_history/tickets_two.svg'
import TicketHistoryIcon from '../../assets/tickets_history/ticket_history.svg'
import AboutUsIcon from '../../assets/tickets_history/about_us.svg'
import SettingsIcon from '../../assets/tickets_history/settings.svg'
export default class UserProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: sessionStorage.getItem("name")
    }
  }
  
  logoutUser = () => {
    sessionStorage.clear()
    (sessionStorage.getItem("token")) 
      ? this.props.history.push('/user')
      : this.props.history.push('/')
  }

  render() {
    return (
      <div className="overlay-fixed profile-container">
        <div className="user-menu-container">
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
              <li className="option-logout option6">
                <button onClick={this.logoutUser} className="span">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}