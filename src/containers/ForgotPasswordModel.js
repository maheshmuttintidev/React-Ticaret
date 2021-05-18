import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'
import {forgotPassword} from '../redux/actions/user.actions'
import Home from '../components/home/home'
import './forgotpassword.css'

const continueRef = React.createRef()
export default function ForgotPasswordModel(props) {
    const [mobileNumber, setmobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mobileNumberValidateError, setmobileNumberValidateError] = useState('')
    const [passwordValidateError, setPasswordValidateError] = useState('')
    const [confirmPasswordValidateError, setConfirmPasswordValidateError] = useState('')
    const [isInvalidCredentials, setIsInvalidCredentials] = useState('')
    const isUserLoggedIn = useSelector(state => state.isLoggedin)
    const history = useHistory()
    const dispatch = useDispatch()

    if(isUserLoggedIn) {
        history.push('/ticaretor')
    }
    useEffect(() => {
        if (mobileNumber) {
            if (mobileNumber.length > 10 || mobileNumber.length < 10) {
                setmobileNumberValidateError("Invalid Mobile Number..!")
            } else {
                setmobileNumberValidateError("")
            }
        }
    }, [mobileNumber])


    useEffect(() => {
        if (password) {
            if (password.length < 8) {
                setPasswordValidateError("password length should be atleast 8 characters")
            } else {
                setPasswordValidateError("")
            }
        }
    }, [password])


    useEffect(() => {
        if (confirmPassword) {
            if (confirmPassword !== password) {
                setConfirmPasswordValidateError("password does not match")
            } else {
                setConfirmPasswordValidateError("")
            }
        }
    }, [confirmPassword, password])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!mobileNumberValidateError && !passwordValidateError && !confirmPasswordValidateError) {
            try {
                dispatch(forgotPassword({mobileNumber, password}))
                history.push('/')
            } catch(err) {
                console.log(err)
            }
        }
        else {
            setIsInvalidCredentials("Invalid Credentials")
        }
    }

    return ReactDOM.createPortal(
        <>
            <Home />
            <div className="popup-forgot__password-overlay">
                <div className="popup-forgot__password-wrapper">
                    <span className="close-btn" onClick={() => history.push('/')}>
                        <span className="nav-link close">&times;</span>
                    </span>
                    <form className="form-forgot__password" method="POST" onSubmit={handleSubmit}>
                        <span style={{color: "var(--secondary-color)"}}>{isInvalidCredentials && isInvalidCredentials}</span>
                        <div>
                            <input placeholder="Mobile Number" type="number" value={mobileNumber} className="input-field" name="mobileNumber" onChange={(e) => setmobileNumber(e.target.value)} required autoComplete="off" />
                        </div>
                        {mobileNumberValidateError && <span className="error-msg-span">{mobileNumberValidateError}</span>}
                        <div>
                            <input placeholder="New Password" type="password" value={password} className="input-field" name="password" onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />
                        </div>
                        {passwordValidateError && <span className="error-msg-span">{passwordValidateError}</span>}
                        <div>
                            <input placeholder="Confirm Password" type="password" value={confirmPassword} className="input-field" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required autoComplete="off" />
                        </div>
                        {confirmPasswordValidateError && <span className="error-msg-span">{confirmPasswordValidateError}</span>}
                        <div>
                            <button ref={continueRef} type="submit" className="form-btn forgot-password">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        , document.getElementById("portal"))
}
