import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Footer from "../../ticaretorPage/footer"
import Header from "../../ticaretorPage/header"
import style from "./index.module.css"
export default function AccountDetails() {
  const isUserLoggedIn = useSelector((state) => state.isLoggedin)
  const history = useHistory()
  if (!isUserLoggedIn) {
    history.push("/")
  }
  return (
    <>
      <Header />
      <div style={{ margin: "3rem 0" }}>
        <form className="form-control">
          <div>
            <input
              className="input-field"
              type="number"
              placeholder="Account Number"
            />
          </div>
          <div>
            <input
              className="input-field"
              type="text"
              placeholder="Card Holder Name"
            />
          </div>
          <div>
            <input
              className="input-field"
              type="number"
              placeholder="IFSC Code"
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <button className={style.formBtn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
