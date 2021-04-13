import React, { Component, createRef } from 'react'
import Home from '../components/BeforeAuthenticationComponents/Home'

const forgotPopupRef = createRef()
export default class ForgotPassword extends Component {
    closePopup = () => {
        forgotPopupRef.current.style.display = "none"
    }
    render() {
        return (
            <main>
                <Home />
                <div ref={forgotPopupRef} className="overlay-fixed">
                    <div className="form-container">
                        <span onClick={this.closePopup} className="close-icon-for-forgot">&times;</span>
                        <form method="POST" onSubmit={this.submitAndSendRequest} className="login-form">
                            <p className="register-heading">Forget Password?</p>
                            <input className="input-field email" type="email" placeholder="Email" onChange={this.setTheData} required /><br />
                            <input className="input-field rpassword" type="password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" name="password" placeholder="New Password" onChange={this.setTheData} required /><br />
                            <input className="input-field arpassword" type="password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" name="password" placeholder="Confirm Password" onChange={this.setTheData} required /><br />
                            <button className="form-btn register transparent-bg-forgot white">Continue</button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}