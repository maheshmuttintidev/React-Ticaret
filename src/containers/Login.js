import React, { Component } from "react"
import Home from '../components/Home'
import { NavLink } from 'react-router-dom'
import FbIcon from '../assets/header/fb.svg'
import GoogleIcon from '../assets/header/gplus.svg'
import UserIconLogin from '../assets/header/user_icon.svg'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginUser} from '../actions/authUser'

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
    this.props.history.push('/user/:id')
  }

  // componentDidMount() {
  //   if(this.props.isUserLoggedIn === true) {
  //     this.props.history.push('/user')
  //   } else {
  //     this.props.history.push('/login')
  //   }
  // }

  render() {
    // console.log(this.props.isUserLoggedIn)

    return (
      <main>
        <Home />
        <section className="overlay-fixed">
          <form className="login-form" onSubmit={this.loginRequest} method="POST">
            <NavLink className="right" to="/">
              <div className="close-icon">
                <svg height="20" viewBox="0 0 329.26933 329" width="20" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#f84464">
                  <path d="m21.339844 329.398438c-5.460938 0-10.925782-2.089844-15.082032-6.25-8.34375-8.339844-8.34375-21.824219 0-30.164063l286.589844-286.59375c8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.339844 8.34375 21.824219 0 30.164063l-286.589844 286.59375c-4.183594 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                  <path d="m307.929688 329.398438c-5.460938 0-10.921876-2.089844-15.082032-6.25l-286.589844-286.59375c-8.34375-8.339844-8.34375-21.824219 0-30.164063 8.339844-8.339844 21.820313-8.339844 30.164063 0l286.589844 286.59375c8.34375 8.339844 8.34375 21.824219 0 30.164063-4.160157 4.179687-9.621094 6.25-15.082031 6.25zm0 0" />
                  </g>
                </svg>
              </div>
            </NavLink>
            <div className="form-container">
              <div className="user-icon-login">
                <img src={UserIconLogin} alt="user-icon" />
              </div>
              <input className="input-field phone" minLength="10" maxLength="10" max="9999999999" pattern="[-+]?[0-9]" type="number" placeholder="Mobile Number" name="phoneNumber" onChange={this.handleChange.bind(this)} required /><br />
              <input className="input-field password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" type="password" placeholder="password" name="password" onChange={this.handleChange.bind(this)} required /><br />
              <button className="form-btn" type="submit">Login</button>  
            </div>
          </form>
          <div className="middle-options">
            <NavLink className="nav-link forgot-password" to="/">Forgot Password?</NavLink>
            <span className="register__phrase">
              <span className="_p">Need an Account?</span>
              <NavLink className="nav-link register" to="/register">Register</NavLink>
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