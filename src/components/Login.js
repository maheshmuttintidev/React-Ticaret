import axios from "axios";
import React, { PureComponent } from "react";
import Home from './Home'
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

  // componentDidMount() {
  //   console.log("componentDidMount() called")
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate() called")
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount() called")
  // }

  loadUserPage = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8652/users/register', this.state)
      .then((res) => {
        console.log(res.data)
      }, error => {
        console.log(error.message)
      })
  }
  // container login-container 
  render() {
    return (
      <main>
        <Home />
        <section className="overlay-fixed">
          <form className="login-form" onSubmit={this.loadUserPage} encType="multipart/form-data">
            <p className="mark right" onClick={this.props.closePopup}>{this.props.text}</p>
            <h1>This is a Login Page</h1>
            <input inputMode="numeric" placeholder="phone" name="phone" onChange={this.handleChange.bind(this)} required /><br />
            <input type="password" placeholder="password" name="password" onChange={this.handleChange.bind(this)} required /><br />
            <button>Login</button>
          </form>
        </section>
      </main>
    );
  }
}

export default Login;