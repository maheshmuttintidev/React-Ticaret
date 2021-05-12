import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/header/logo.png'
import './register.css'
export default function Register() {
    return (
        <div className="register-page-hero">
            <div className="logo-wrapper">
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="register-wrapper">
                <h2 className="sub-heading">
                    Create an account
                </h2>
                <form className="form-control register">
                    <div className="register-inputs">
                    <div>
                        <input className="input-field" type="text" placeholder="Full Name" />
                    </div>
                    <div>
                        <input className="input-field" type="password" placeholder="Password" />
                    </div>
                    <div>
                        <input className="input-field" type="number" placeholder="Mobile Number" />
                    </div>
                    </div>
                    <div className="otp-wrapper">
                        <button type="button" className="form-btn otp">Get OTP</button>
                        <input className="input-field otp" type="number" placeholder="Enter OTP" />
                    </div>
                    <div>
                        <button type="submit" className="form-btn register">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
