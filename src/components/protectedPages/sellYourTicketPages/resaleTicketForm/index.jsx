import React from "react"
import Header from "../../ticaretorPage/header"
import Footer from "../../ticaretorPage/footer"
import style from "./index.module.css"
import { useHistory } from "react-router"
import { useSelector } from "react-redux"
export default function ResaleTicketForm() {
  const fullName = JSON.parse(sessionStorage.getItem("userData"))?.name
  const history = useHistory()
  const isUserLoggedIn = useSelector((state) => state.isLoggedin)
  if (!isUserLoggedIn) {
    history.push("/")
  }
  return (
    <>
      <Header fullName={fullName} />
      <div className={style.resaleTicketFormWrapper}>
        <h2 style={{ fontSize: "25px" }}>Resale Your Ticket</h2>
        <form
          style={{ alignItems: "flex-start" }}
          className="form-control"
          encType="multipart/form-data"
        >
          <div className={style.inputFieldWrapper}>
            <select className={style.inputField}>
              <option value="AMB Theatre">AMB Theatre</option>
              <option value="Navan Theatre">Navan Theatre</option>
              <option value="Krishna Theatre">Krishna Theatre</option>
              <option value="Jack Theatre">Jack Theatre</option>
            </select>
          </div>
          <div className={style.inputFieldWrapper}>
            <input
              type="text"
              placeholder="Movie Name"
              className={style.inputField}
            />
          </div>
          <div
            className={style.inputFieldWrapper}
            style={{ display: "flex", gap: "0 1rem", flexWrap: "wrap" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                style={{
                  fontFamily: "Caros Bold",
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, .7)",
                }}
              >
                Date
              </label>
              <input
                type="date"
                className={style.inputField}
                style={{ width: "235px" }}
              />
            </div>
            <div className={style.timeFieldWrapper}>
              <label
                style={{
                  fontFamily: "Caros Bold",
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, .7)",
                }}
              >
                Time
              </label>
              <input
                type="time"
                className={style.inputField}
                style={{ width: "151px" }}
              />
            </div>
          </div>
          <div className={style.inputFieldWrapper}>
            <input type="file" className={style.inputField} />
          </div>
          <div
            className={style.inputFieldWrapper}
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                style={{ color: "rgba(255, 255, 255, .5)", fontSize: "18px" }}
              >
                No of Persons in ticket
              </label>
              <input
                type="number"
                placeholder="2"
                className={style.inputField}
                style={{ width: "173px" }}
              />
            </div>
            <div
              className={style.soldTicketCountWrapper}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                style={{ color: "rgba(255, 255, 255, .5)", fontSize: "18px" }}
              >
                No of tickets to sold
              </label>
              <input
                type="number"
                placeholder="1"
                className={style.inputField}
                style={{ width: "173px" }}
              />
            </div>
          </div>
          <div className={style.inputFieldWrapper}>
            <input
              type="number"
              placeholder="price per ticket"
              className={style.inputField}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1.6rem",
            }}
          >
            <button
              type="submit"
              className={style.formBtn}
              onClick={() =>
                history.push(
                  "/ticaretor/resale-ticket-form/fill-account-details"
                )
              }
            >
              Resale My Ticket
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
