import Logo from '../../../assets/header/logo.png'
import FbIcon from '../../../assets/footer/Icon awesome-facebook-f.svg'
import InstaIcon from '../../../assets/footer/Icon awesome-instagram.svg'
import LinkedInIcon from '../../../assets/footer/Icon awesome-linkedin.svg'
import TwitterIcon from '../../../assets/footer/Icon awesome-twitter.svg'
import { useHistory } from 'react-router-dom'
import './index.css'

export default function Footer() {
    const history = useHistory()
    return (
        <footer className="home-footer">
            <div>
                <div className="logo-wrapper">
                    <span onClick={() => history.push('/')}>
                        <img src={Logo} alt="" />
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <img src={FbIcon} alt="" />
                    <p>Facebook</p>
                </div>
                <div>
                    <img src={TwitterIcon} alt="" />
                    <p>Twitter</p>
                </div>
                <div>
                    <img src={InstaIcon} alt="" />
                    <p>Instagram</p>
                </div>
                <div>
                    <img src={LinkedInIcon} alt="" />
                    <p>Linkedin</p>
                </div>
            </div>
        </footer>
    )
}