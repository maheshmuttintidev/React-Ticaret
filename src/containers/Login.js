// login component here used as "container component"
// Here is I used the "connect()" method to connect this to the redux store
// "login()" action in redux is performed using "connect()" method
// "useSelector()" hook is used to select the prop that are in redux store

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import UserIcon from '../assets/register/user_profile_icon.svg'
import GoogleIcon from '../assets/header/google_icon.svg'
import FbIcon from '../assets/header/facebook_icon.svg'
import Home from '../components/home/home'
import { login } from '../redux/actions/user.actions'
import './login.css'

export default function Login() {
    const [mobileNumber, setMobileNumber] = useState()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isUserLoggedIn = useSelector(state => state.isLoggedin)
    const dispatch = useDispatch()
    const history = useHistory()

    const loginUser = async (e) => {
        e.preventDefault()
        dispatch(login({ mobileNumber, password }))
        const error = JSON.parse(sessionStorage.getItem("userData"))?.message
        console.log(error)
        setError(error)
        
    }

    if (isUserLoggedIn) {
        history.push(`/ticaretor`)
    }

    const closeLoginPopup = () => {
        history.push('/')
    }

    const gotoForgotPasswordComponent = () => {
        history.push('/forgot-password')
    }

    const gotoRegisterComponent = () => {
        history.push('/register')
    }

    return ReactDOM.createPortal(
        <>
            <Home />
            <div className="overlay-fixed-full">
                <div className="form-wrapper">
                    <div className="close-btn">
                        <span onClick={closeLoginPopup} className="nav-link close">&times;</span>
                    </div>
                    <img src={UserIcon} alt="" className="user-icon-login" />
                    <form method="" className="form-control" onSubmit={loginUser}>
                        {error &&
                            <div style={{ color: 'var(--secondary-color)', paddingTop: '7px', margin: "auto" }}>
                                <span>{error}</span>
                            </div>
                        }
                        <input type="number" placeholder="Mobile Number" className="input-field number" name="mobileNumber" onChange={(e) => setMobileNumber(e.target.value)} required />
                        <input type="password" placeholder="Password" className="input-field password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="form-btn login">Login</button>
                    </form>
                    <div className="alternative-auths-wrapper">
                        <div>
                            <p className="paragraph forgot-password">
                                <span onClick={gotoForgotPasswordComponent} className="nav-link forgot-password">Forgot Password?</span>
                            </p>
                        </div>
                        <div>
                            <p className="paragraph signup-text-parent">
                                <span className="paragraph signup-text">Need Account? </span>
                                <span onClick={gotoRegisterComponent} className="nav-link register">Signup</span>
                            </p>
                        </div>
                        <div className="auth-btns-wrapper">
                            <button type="button" className="auth-btn">
                                <img src={GoogleIcon} alt="" />
                                <span className="paragraph bold">google</span>
                            </button>
                            <button type="button" className="auth-btn">
                                <img src={FbIcon} alt="" />
                                <span className="paragraph bold">facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
