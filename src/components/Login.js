import axios from "axios";
import React, { PureComponent } from "react";
import Home from './Home'
import { NavLink } from 'react-router-dom';

import FbIcon from '../assets/header/fb.svg'
import GoogleIcon from '../assets/header/gplus.svg'
import UserIconLogin from '../assets/header/user_icon.svg'
class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      password: ''
    }
  }


  handleChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  loadUserPage = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8652/users/register', this.state)
      .then((res) => {
        console.log(res.data)
      }, error => {
        console.log(error.message)
      })
  }
  render() {
    return (
      <main>
        <Home />
        <section className="overlay-fixed">
          <form className="login-form" onSubmit={this.loadUserPage} encType="multipart/form-data">
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
            <div className="logins-container">
              <div className="user-icon-login">
                <img src={UserIconLogin} alt="user-icon" />
              </div>
              <button className="login-with google">
                <img src={GoogleIcon} alt="login with google" />
                <span className="">Touch with Google</span>
              </button>
              <button className="login-with facebook">
                <img src={FbIcon} alt="login with facebook" />
                <span className="">Touch with Facebook</span>
              </button>
              <div className="or">Or</div>
              <input className="phone-field" inputMode="numeric" placeholder="phone" name="phone" onChange={this.handleChange.bind(this)} required /><br />
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default Login;