import React, { Component, createRef } from "react"
import Home from '../components/BeforeAuthenticationComponents/Home'
import { NavLink } from 'react-router-dom'
import FbIcon from '../assets/header/facebook_icon.png'
import GoogleIcon from '../assets/header/google_icon.jpg'
import UserIconLogin from '../assets/header/user_icon.svg'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginUser} from '../actions/authUser'
import auth from '../auth/auth'

const loginPopupRef = createRef()

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: '',
      password: ''
    }
  }

  handleChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  loginRequest = async (e) => {
    e.preventDefault()
    await this.props.loginUser(this.state)
    auth.login(() => {
      this.props.history.push('/user')
    })
  }

  closePopup = () => {
    loginPopupRef.current.style.display = "none"
  }

  

  render() {
    return (
      <main>
        <Home />
        <section ref={loginPopupRef} className="overlay-fixed">
          <form className="login-form" onSubmit={this.loginRequest} method="POST">
          <div className="form-container">
            <span onClick={this.closePopup} className="close-icon-for-login">&times;</span>
              <div className="user-icon-login">
                <img src={UserIconLogin} alt="user-icon" />
              </div>
              <input className="input-field phone" minLength="10" maxLength="10" max="9999999999" pattern="[-+]?[0-9]" type="number" placeholder="Mobile Number" name="phoneNumber" onChange={this.handleChange.bind(this)} required /><br />
              <input className="input-field password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" type="password" placeholder="password" name="password" onChange={this.handleChange.bind(this)} required /><br />
              <button className="form-btn hover-primary" type="submit">Login</button>  
            </div>
          </form>
          <div className="middle-options">
            <NavLink className="nav-link remove-underline forgot-password hover-activate-underline" to="/forgot-password">Forgot Password?</NavLink>
            <span className="register__phrase">
              <span className="_p">Need an Account?</span>
              <NavLink className="nav-link remove-underline register hover-activate-underline" to="/register">Register</NavLink>
            </span>
          </div>
          <div className="logins-container">
              <button className="login-with google">
                <img src={GoogleIcon} alt="login with google" />
                <span className="auth-google">Google</span>
              </button>
              <button className="login-with facebook">
                <img src={FbIcon} alt="login with facebook" />
                <span className="auth-facebook">Facebook</span>
              </button>
          </div>
        </section>
      </main>
    );
  }
}

function mapStateToProps(userAuthState) {
  return {
    isUserLoggedIn: userAuthState.isUserLoggedIn
  }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({loginUser}, dispatch))(Login)