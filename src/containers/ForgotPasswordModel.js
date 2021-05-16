import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import Home from '../components/home/home'
import './forgotpassword.css'

const continueRef = React.createRef()
export default function ForgotPasswordModel(props) {
    const [emailID, setEmailID] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailIDValidateError, setEmailIDValidateError] = useState('')
    const [passwordValidateError, setPasswordValidateError] = useState('')
    const [confirmPasswordValidateError, setConfirmPasswordValidateError] = useState('')
    const isUserLoggedIn = props?.isUserLoggedIn

    useEffect(() => {
        if (emailID) {
            if (!emailID.includes("@gmail.com") || emailID.length < 18) {
                setEmailIDValidateError("Invalid Email..!")
            } else {
                setEmailIDValidateError("")
            }
        }
    }, [emailID])


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
        if(!emailIDValidateError && !passwordValidateError && !confirmPasswordValidateError) {
            if (isUserLoggedIn) {
                props.history.push(`/ticaretor/${props?.userId}`)
            } else {
                props.history.push("/")
            }
        } 
        else {
            alert("Invalid Credentials")
        }
    }
    if(isUserLoggedIn) {
        if (props?.userId) {
            props.history.push(`/ticaretor/${props?.userId}`)
        }
    }

    return ReactDOM.createPortal(
        <>
            <Home />
            <div className="popup-forgot__password-overlay">
                <div className="popup-forgot__password-wrapper">
                    <span className="close-btn">
                        <NavLink to="/login" className="nav-link close">&times;</NavLink>
                    </span>
                    <form className="form-forgot__password" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="Email Address" type="email" value={emailID} className="input-field" name="emailID" onChange={(e) => setEmailID(e.target.value)} required autoComplete="off" />
                        </div>
                        {emailIDValidateError && <span className="error-msg-span">{emailIDValidateError}</span>}
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
