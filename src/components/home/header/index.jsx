import { useState } from "react"
import Logo from "../../../assets/header/logo.png"
import LocationIcon from "../../../assets/header/location.svg"
import UserIcon from "../../../assets/header/user.svg"
import UserIconFull from "../../../assets/header/user_full.svg"
import BurgerMenuIcon from "../../../assets/header/burger_icon.svg"
import BurgerMenuIconWhite from "../../../assets/header/burger_icon_white.svg"
import Option1 from "../../../assets/header_menu/booked_ticket.svg"
import Option2 from "../../../assets/header_menu/ticket_history.svg"
import Option3Full from "../../../assets/header_menu/about_us.svg"
import Option4 from "../../../assets/header_menu/setting.svg"
import { useHistory } from "react-router-dom"
import Location from "../location"
import style from "./index.module.css"

const Menu = () => {
  const history = useHistory()
  const showLoginPopup = () => {
    history.push("/login")
  }

  return (
    <>
      <div className={style.overlayFixed}>
        <div className={style.subMenuWrapper}>
          <div>
            <p style={{ paddingTop: "3px" }}>Hi...</p>
            <span onClick={showLoginPopup} className={style.subMenuLoginOption}>
              Login
            </span>
          </div>
          <div>
            <div className={style.disableCursor}>
              <img src={Option1} alt="" />
              <p className={style.disabled}>Booked ticket</p>
            </div>
            <div className={style.disableCursor}>
              <img src={Option2} alt="" />
              <p className={style.disabled}>Ticket history</p>
            </div>
            <div
              className={style.enableCursor}
              onClick={() => history.push("/about")}
            >
              <img src={Option3Full} alt="" />
              <p className={style.enabled}>About Us</p>
            </div>
            <div className={style.disableCursor}>
              <img src={Option4} alt="" />
              <p className={style.disabled}>Settings</p>
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
  const history = useHistory()

  const displayLoginPopup = () => {
    history.push("/login")
  }

  return (
    <header>
      <div style={{ cursor: "pointer" }}>
        <span onClick={() => history.push("/")}>
          <img src={Logo} alt="" />
        </span>
      </div>
      <div>
        <div style={{ position: "relative" }}>
          <div onClick={() => setIsLocationPopup(!isLocationPopup)}>
            <img src={LocationIcon} alt="" />
          </div>
          {isLocationPopup && <Location />}
        </div>
        <div onClick={displayLoginPopup}>
          <span style={{ fontSize: "20px" }}>Login</span>
        </div>
        <div
          style={{ maxWidth: "max-content !important" }}
          className={
            isClicked
              ? `${style.subMenuOption} ${style.activeBg}`
              : `${style.subMenuOption}`
          }
          onClick={() => setIsClicked((prevState) => !prevState)}
        >
          <div>
            <img
              src={isClicked ? BurgerMenuIconWhite : BurgerMenuIcon}
              alt=""
            />
            <img src={isClicked ? UserIconFull : UserIcon} alt="" />
          </div>
          {isClicked && <Menu />}
        </div>
      </div>
    </header>
  )
}
