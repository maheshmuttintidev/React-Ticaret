import { useState } from 'react'
import { connect /*, useSelector */ } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom'
import UserIcon from '../assets/register/user_profile_icon.svg'
import GoogleIcon from '../assets/header/google_icon.svg'
import FbIcon from '../assets/header/facebook_icon.svg'
import Home from '../components/home/home'
import { login } from '../actions'
import './login.css'

export default connect(null, { login })(props => {
    const [mobileNumber, setMobileNumber] = useState()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // const isUserLoggedIn = useSelector(state => state.isUserLoggedIn) -> redux state
    const isUserLoggedIn = props?.isUserLoggedIn // by use of render prop
    
    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await props.login({ mobileNumber, password })
            const errorMessage = JSON.parse(sessionStorage.getItem("userMessage"))
            if(errorMessage) {
                setError(errorMessage?.message)
            }
            if(isUserLoggedIn) {
                props.history.push(`/ticaretor/${props?.userId}`)
            } else {
                props.history.push('/login')
            }
        } catch (err) {
            alert("Server is not running..!")
        }
    }
    
    if(props?.userId) {
        props.history.push(`/ticaretor/${props?.userId}`)
    }
    
    return ReactDOM.createPortal(
        <>
            <Home />
            <div className="overlay-fixed-full">
                <div className="form-wrapper">
                    <div className="close-btn">
                        <NavLink className="nav-link close" to="/">&times;</NavLink>
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
                                <NavLink className="nav-link forgot-password" to="/forgot-password">Forgot Password?</NavLink>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="paragraph signup-text">Need Account? </span>
                                <NavLink className="nav-link register" to="/register">Sign up / Register</NavLink>
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
})
