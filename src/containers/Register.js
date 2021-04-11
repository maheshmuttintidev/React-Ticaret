import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Footer from '../components/BeforeAuthenticationComponents/Footer'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {registerUser} from '../actions/authUser'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            password: '',
            phoneNumber: '',
            // otp: ''
        }
    }

    setTheData = (e) => {
        var name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    submitAndSendRequest = async (e) => {
        e.preventDefault()
        await this.props.registerUser(this.state)
        this.props.history.push('/user')
        console.log(this.props.isUserLoggedIn)
    }

    render() {
        return (
            <div className="register-container">
                <div className="logo-container">
                    <NavLink to="/" className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                            <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                            <g id="Group_5" dataname="Group 5" transform="translate(22 -410.645)">
                                <circle id="Ellipse_7" dataname="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff"/>
                                <circle id="Ellipse_6" dataname="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff"/>
                            </g>
                            <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                <path id="Path_3781" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3"/>
                                <path id="Path_3782" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3"/>
                            </g>
                            <g id="Group_4" dataname="Group 4" transform="translate(-102 -417)">
                                <text id="T" transform="translate(9 44)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">T</tspan></text>
                                <text id="i" transform="translate(30.794 44)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">i</tspan></text>
                                <text id="r" transform="translate(79.367 44)" fill="#fff" fontSize="34" fontStyle="italic"><tspan x="0" y="0">r</tspan></text>
                                <text id="e" transform="translate(95.398 45)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">e</tspan></text>
                                <text id="t-2" dataname="t" transform="translate(118.696 45)" fill="#fff" fontSize="35" fontStyle="italic"><tspan x="0" y="0">t</tspan></text>
                            </g>
                            </g>
                        </svg>
                    </NavLink>
                </div>
                <form method="POST" onSubmit={this.submitAndSendRequest} className="register-form">
                    <p className="register-heading">Create an Account</p>
                    <input className="input-field fname" type="text" minLength="6" maxLength="20" name="fullName" placeholder="Full Name" onChange={this.setTheData} required/><br />
                    <input className="input-field rpassword" type="password" minLength="8" maxLength="20" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" name="password" placeholder="password" onChange={this.setTheData} required/><br />
                    <input className="input-field rmobile" minLength="10" maxLength="10" max="9999999999" type="number" name="phoneNumber" pattern="[-+]?[0-9]" placeholder="Mobile Number" onChange={this.setTheData} required/>
                    <button className="form-btn register white">Register</button>                  
                </form>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(userAuthState) {
    return {
        isUserLoggedIn: userAuthState.isUserLoggedIn
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({registerUser}, dispatch))(Register)

// <div className="otp-section">
//     <button className="form-btn otp">Get OTP</button>
//     <input className="input-field otp-field" type="text" minLength="4" maxLength="4" name="otp" placeholder="Enter OTP" required/><br />  
// </div>