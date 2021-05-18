import { useState } from 'react'
import {useDispatch} from 'react-redux'
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
import {useHistory } from 'react-router-dom'
import Location from '../location'
import {logout} from '../../../redux/actions/user.actions'
import './index.css'

const Menu = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const showLoginPopup = () => {
        history.push('/login')
    }

    return (
        <>
            <div className="overlay-fixed">
                <div className="sub-menu-wrapper">
                    <div>
                        <p className="">Hi... {props?.fullName}</p>
                        {props?.fullName ? "" : <span onClick={showLoginPopup} className="sub-menu-login-option">Login</span>}
                    </div>
                    <div>
                        <div className={props?.fullName ? "enableCursor": "disableCursor"}>
                            <img src={props?.fullName ? Option1Full : Option1} alt="" />
                            <p className={props?.fullName ? "enabled": "disabled"}>Booked ticket</p>
                        </div>
                        <div className={props?.fullName ? "enableCursor": "disableCursor"}>
                            <img src={props?.fullName ? Option2Full : Option2} alt="" />
                            <p className={props?.fullName ? "enabled": "disabled"}>Ticket history</p>
                        </div>
                        <div className={props?.fullName ? "enableCursor": "disableCursor"}>
                            <img src={props?.fullName ? Option3Full : Option3} alt="" />
                            <p className={props?.fullName ? "enabled": "disabled"}>About Us</p>
                        </div>
                        <div className={props?.fullName ? "enableCursor": "disableCursor"}>
                            <img src={props?.fullName ? Option4Full : Option4} alt="" />
                            <p className={props?.fullName ? "enabled": "disabled"}>Settings</p>
                        </div>
                        <div className={props?.fullName ? "btnEnabled" : "btnDisabled"} onClick={() => dispatch(logout())}>
                            <button className={props?.fullName ? "enableCursor" : "disableCursor"}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function Header({fullName}) {
    const [isClicked, setIsClicked] = useState(false)
    const [isLocationPopup, setIsLocationPopup] = useState(false)
    const history = useHistory()

    const displayLoginPopup = () => {
        history.push('/login')
    }

    return (
        <header className="home-header">
            <div className="logo-wrapper">
                <span onClick={() => history.push("/")}>
                    <img src={Logo} alt="" />
                </span>
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
                            <div className="login-option" onClick={displayLoginPopup}>
                                <span className="mini-sub-heading">Login</span>
                            </div>
                    }
                <div style={{maxWidth: "max-content !important"}} className={isClicked ? `sub-menu-option activeBg` : `sub-menu-option`} onClick={() => setIsClicked(prevState => !prevState)}>
                    <div>
                        <img src={BurgerMenuIcon} alt="" />
                        <img src={UserIcon} alt="" />
                    </div>
                    {isClicked && <Menu fullName={fullName} />}
                </div>
            </div>
        </header>
    )
}