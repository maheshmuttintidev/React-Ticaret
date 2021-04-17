import React, { Component, createRef } from 'react'
import Home from '../components/BeforeAuthenticationComponents/Home'
import EyeClose from '../assets/register/eye_close.svg'
import EyeOpen from '../assets/register/eye_open.svg'

const forgotPopupRef = createRef()
const passwordRef = createRef()
const confirmPasswordRef = createRef()

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailId: '',
            password: '',
            confirmPassword: '',
            isShowPassword: false,
            isShowConfirmPassword: false
        }
    }

    closePopup = () => {
        forgotPopupRef.current.style.display = "none"
    }

    showPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
        if (this.state.isShowPassword !== true) {
            passwordRef.current.type = 'text'
        } else {
            passwordRef.current.type = 'password'
        }
    }

    showConfirmPassword = () => {
        this.setState({
            isShowConfirmPassword: !this.state.isShowConfirmPassword
        })
        if (this.state.isShowConfirmPassword !== true) {
            confirmPasswordRef.current.type = 'text'
        } else {
            confirmPasswordRef.current.type = 'password'
        }
    }
    
    render() {
        return (
            <main>
                <Home />
                <div ref={forgotPopupRef} className="overlay-fixed">
                    <div className="form-container">
                        <form method="POST" onSubmit={this.submitAndSendRequest} className="login-form">
                            <span onClick={this.closePopup} className="close-icon-for-forgot">&times;</span>
                            <p className="register-heading">Forget Password?</p>
                            <div>
                                <input className="input-field email" tabIndex="1" type="email" placeholder="Email" onChange={this.handleChange} required /><br />
                            </div>
                            <div className="passwordFieldContainer">
                                <input tabIndex="2" ref={passwordRef} className="input-field password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" type="password" placeholder="password" name="password" onChange={this.handleChange} required /><br />
                                <button type="button" onClick={this.showPassword}>
                                    <img src={this.state.isShowPassword ? EyeClose : EyeOpen} alt="show password" />
                                </button>
                            </div>
                            <div className="passwordFieldContainer">
                                <input tabIndex="3" ref={confirmPasswordRef} className="input-field password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" type="password" placeholder="confirm password" name="confirmPassword" onChange={this.handleChange} required /><br />
                                <button type="button" onClick={this.showConfirmPassword}>
                                    <img src={this.state.isShowConfirmPassword ? EyeClose : EyeOpen} alt="show password" />
                                </button>
                            </div>
                            <button tabIndex="4" type="submit" className="form-btn active-spark register transparent-bg-forgot white">Continue</button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}