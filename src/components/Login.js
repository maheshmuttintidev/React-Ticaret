import React, { Component } from "react"; 
// import {NavLink} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this)
  }

  togglePopup() {
      this.setState({
          showPopup: true
      })
  }
  render() {
    return (
      <main>
        <section className="container login-container">
          <form className="login-form">
            <p className="mark right" onClick={this.props.closePopUp}>x</p>
            <h1>This is a Login Page</h1>
            <input type="email" placeholder="email" name="email" /><br />
            <input type="password" placeholder="password" name="password" /><br />
            <button>Login</button>
          </form>
        </section>
      </main>
    );
  }
}

export default Login;