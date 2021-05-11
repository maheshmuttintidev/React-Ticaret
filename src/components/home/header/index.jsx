import { useState, useEffect } from 'react'
import Logo from '../../../assets/header/logo.png'
import LocationIcon from '../../../assets/header/location.svg'
import UserIcon from '../../../assets/header/user.svg'
import BurgerMenuIcon from '../../../assets/header/burger_icon.svg'
import Option1 from '../../../assets/header_menu/booked_ticket.svg'
import Option2 from '../../../assets/header_menu/ticket_history.svg'
import Option3 from '../../../assets/header_menu/aboutus.svg'
import Option4 from '../../../assets/header_menu/setting.svg'
import { NavLink } from 'react-router-dom'
import './index.css'
import Location from '../location'

const Menu = () => {
    return (
        <>
            <div className="overlay-fixed">
                <div className="sub-menu-wrapper">
                    <div>
                        <p className="">Hi...</p>
                        <NavLink to="/login" className="sub-menu-login-option">Login</NavLink>
                    </div>
                    <div>
                        <div>
                            <img src={Option1} alt="" />
                            <p>Booked ticket</p>
                        </div>
                        <div>
                            <img src={Option2} alt="" />
                            <p>Ticket history</p>
                        </div>
                        <div>
                            <img src={Option3} alt="" />
                            <p>About Us</p>
                        </div>
                        <div>
                            <img src={Option4} alt="" />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function Header() {
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
                <div className="login-option">
                    <NavLink to="/login" className="nav-link mini-sub-heading">Login</NavLink>
                </div>
                <div className="sub-menu-option">
                    <div onClick={() => setIsClicked(prevState => !prevState)}>
                        <img src={BurgerMenuIcon} alt="" />
                        <img src={UserIcon} alt="" />
                    </div>
                    {isClicked && <Menu />}
                </div>
            </div>
        </header>
    )
}