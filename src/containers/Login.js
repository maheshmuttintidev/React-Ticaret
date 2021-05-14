import { NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import UserIcon from '../assets/register/user_profile_icon.svg'
import GoogleIcon from '../assets/header/google_icon.svg'
import FbIcon from '../assets/header/facebook_icon.svg'
import Home from '../components/home/home'
import './login.css'

export default function Login() {
    return ReactDOM.createPortal(
        <>
            <Home />
            <div className="overlay-fixed-full">
                <div className="form-wrapper">
                    <div className="close-btn">
                        <NavLink className="nav-link close" to="/">&times;</NavLink>
                    </div>
                    <img src={UserIcon} alt="" className="user-icon-login" />
                    <form method="" className="form-control">
                        <input type="number" placeholder="Mobile Number" className="input-field number" name="mobileNumber" required/>
                        <input type="password" placeholder="Password" className="input-field password" name="password" required/>
                        <button type="submit" className="form-btn login">Login</button>
                    </form>
                    <div className="alternative-auths-wrapper">
                        <div>
                            <p className="paragraph forgot-password">
                                <NavLink className="nav-link forgot-password" to="/forgot-password">Forgot Password?</NavLink>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="paragraph signup-text">Need Account? </span>
                                <NavLink className="nav-link register" to="/register">Sign up</NavLink>
                            </p>
                        </div>
                        <div className="auth-btns-wrapper">
                            <button type="button" className="auth-btn">
                                <img src={GoogleIcon} alt="" />
                                <span className="paragraph">google</span>
                            </button>
                            <button type="button" className="auth-btn">
                                <img src={FbIcon} alt="" />
                                <span className="paragraph">facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}


Login.propTypes = {
    mobileNumber: PropTypes.number.isRequired,
    password: PropTypes.string.isRequired
}