import { useState, useEffect } from 'react'
import Logo from '../../../assets/header/logo.png'
import LocationIcon from '../../../assets/header/location.svg'
import UserIcon from '../../../assets/header/user.svg'
import BurgerMenuIcon from '../../../assets/header/burger_icon.svg'
import Option1 from '../../../assets/header_menu/booked_ticket.svg'
import Option1Full from '../../../assets/header_menu/booked_ticket_full.svg'
import Option2 from '../../../assets/header_menu/ticket_history.svg'
import Option2Full from '../../../assets/header_menu/ticket_history_full.svg'
import Option3 from '../../../assets/header_menu/aboutus.svg'
import Option3Full from '../../../assets/header_menu/about_us.svg'
import Option4 from '../../../assets/header_menu/setting.svg'
import Option4Full from '../../../assets/header_menu/settings.svg'
import { NavLink } from 'react-router-dom'
import Location from '../location'
import classnames from 'classnames'
import './index.css'

const Menu = (props) => {
    const logout = () => {
        sessionStorage.removeItem("userData")
        props.history.push("/")
    }
    return (
        <>
            <div className="overlay-fixed">
                <div className="sub-menu-wrapper">
                    <div>
                        <p className="">Hi... {props?.fullName}</p>
                        {props?.fullName ? "" : <NavLink to="/login" className="sub-menu-login-option">Login</NavLink>}
                    </div>
                    <div>
                        <div className={classnames(props?.fullName ? "enableCursor": "disableCursor")}>
                            <img src={props?.fullName ? Option1Full : Option1} alt="" />
                            <p className={classnames(props?.fullName ? "enabled": "disabled")}>Booked ticket</p>
                        </div>
                        <div className={classnames(props?.fullName ? "enableCursor": "disableCursor")}>
                            <img src={props?.fullName ? Option2Full : Option2} alt="" />
                            <p className={classnames(props?.fullName ? "enabled": "disabled")}>Ticket history</p>
                        </div>
                        <div className={classnames(props?.fullName ? "enableCursor": "disableCursor")}>
                            <img src={props?.fullName ? Option3Full : Option3} alt="" />
                            <p className={classnames(props?.fullName ? "enabled": "disabled")}>About Us</p>
                        </div>
                        <div className={classnames(props?.fullName ? "enableCursor": "disableCursor")}>
                            <img src={props?.fullName ? Option4Full : Option4} alt="" />
                            <p className={classnames(props?.fullName ? "enabled": "disabled")}>Settings</p>
                        </div>
                        <div className={classnames(props?.fullName ? "btnEnabled" : "btnDisabled")}>
                            <button className={classnames(props?.fullName ? "enableCursor" : "disableCursor")} onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function Header({fullName, history}) {
    const [isClicked, setIsClicked] = useState(false)
    const [isLocationPopup, setIsLocationPopup] = useState(false)

    useEffect(() => {
        console.log(isLocationPopup)
    }, [isLocationPopup])

    return (
        <header className="home-header">
            <div className="logo-wrapper">
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="nav-wrapper">
                <div className="location-option">
                    <div onClick={() => setIsLocationPopup(!isLocationPopup)}>
                        <img src={LocationIcon} alt="" />
                    </div>
                    {isLocationPopup && <Location />}
                </div>
                    {fullName ? 
                            <span style={{border: "0", width: "max-content"}}>{fullName}</span> : 
                            <div className="login-option">
                                <NavLink to="/login" className="nav-link mini-sub-heading">Login</NavLink>
                            </div>
                    }
                <div className="sub-menu-option">
                    <div onClick={() => setIsClicked(prevState => !prevState)}>
                        <img src={BurgerMenuIcon} alt="" />
                        <img src={UserIcon} alt="" />
                    </div>
                    {isClicked && <Menu fullName={fullName} history={history} />}
                </div>
            </div>
        </header>
    )
}