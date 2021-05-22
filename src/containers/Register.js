// register component here used as "container component"
// Here is I used the "useDispatch()" method to dispatch the "register()" action
// "useSelector()" hook is used to select the prop that are in redux store

import {useState, useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import Logo from '../assets/header/logo.png'
import Footer from '../components/home/footer'
import {register} from '../redux/actions/user.actions'
import './register.css'

export default connect(null, {register})(props => {
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [OTPNotWorking, setOTPNotWorking] = useState('')
    const [isValidFullname, setIsValidFullname] = useState('')
    const [isValidPassword, setIsValidPassword] = useState('')
    const [isValidMobileNumber, setIsValidMobileNumber] = useState('')
    const isLoggedin = useSelector(state => state.isLoggedin)
    const history = useHistory()

    useEffect(() => {
        if(fullName) {
            if(fullName.length < 8) {
                setIsValidFullname("Your fullname is atleast 8 characters")
            } else {
                setIsValidFullname("")
            }
        }
    }, [fullName])

    useEffect(() => {
        if(password) {
            if(password.length < 8) {
                setIsValidPassword("Password is atleast 8 characters")
            } else {
                setIsValidPassword("")
            }
        }
    }, [password])

    useEffect(() => {
        if(mobileNumber) {
            if(mobileNumber.length < 10) {
                setIsValidMobileNumber("Invalid mobile number")
            } else {
                setIsValidMobileNumber("")
            }
        }

    }, [mobileNumber])


    const registerUser = async (e) => {
        e.preventDefault()
        try {
            await props.register({fullName, password, mobileNumber})
        } catch(err) {
            alert("server is not running.!")
        }
    }

    if(isLoggedin) {
        history.push(`/ticaretor`)
    }



    return (
        <>
            <div className="register-page-hero">
                <div className="logo-wrapper">
                    <span onClick={() => history.push("/")}>
                        <img src={Logo} alt="" />
                    </span>
                </div>
                <div className="register-wrapper">
                    <h2 className="sub-heading">
                        Create an account
                    </h2>
                    <form className="form-control register" onSubmit={registerUser}>
                        <div className="register-inputs">
                            <div>
                                <input className="input-field" type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required autoComplete="off" />
                            </div>
                            {isValidFullname && <span style={{color: 'var(--secondary-color)'}}>{isValidFullname}</span>}
                            <div>
                                <input className="input-field" type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />
                            </div>
                            {isValidPassword && <span style={{color: 'var(--secondary-color)'}}>{isValidPassword}</span>}
                            <div>
                                <input className="input-field" type="number" placeholder="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required autoComplete="off" />
                            </div>
                            {isValidMobileNumber && <span style={{color: 'var(--secondary-color)'}}>{isValidMobileNumber}</span>}
                        </div>
                        <div className="otp-wrapper">
                            <button type="button" className="form-btn otp" onClick={() => setTimeout(setOTPNotWorking, 2000) ? setOTPNotWorking("Sorry, It's not implemented yet..!"): setOTPNotWorking("")}>Get OTP</button>
                            <input className="input-field otp" type="number" placeholder="Enter OTP" />
                        </div>
                        {OTPNotWorking && <span style={{paddingTop: '2rem', color: 'var(--secondary-color)'}}>{OTPNotWorking}</span>}
                        <div>
                            <button type="submit" className="form-btn register">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
})