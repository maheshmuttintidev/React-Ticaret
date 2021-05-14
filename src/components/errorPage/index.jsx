import ErrorPagePic from '../../assets/404_page/404_ticaret_style.svg'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/header/logo.png'
import './index.css'

export default function NotFound() {
    return(
        <>
            <div className="logo-wrapper error-page">
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="error-model-wrapper">
                <img src={ErrorPagePic} alt="" />
                <h2>404 - Page Not Found</h2>
            </div>
        </>
    )
}