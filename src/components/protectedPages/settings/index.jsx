import React from "react"
import Header from "../ticaretorPage/header"
import Footer from "../ticaretorPage/footer"
import styles from "./index.module.css"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Settings() {
  const isLoggedIn = useSelector((state) => state.isLoggedin)
  const history = useHistory()
  if (!isLoggedIn) {
    history.push("/")
  }
  return (
    <>
      <Header />
      <section className={styles.settingsWrapper}>
        <h1>Edit Profile</h1>
        <form className={styles.updateProfileFormContainer}>
          <div className={styles.horizontalFieldsWrapper}>
            <input
              className="input-field"
              type="text"
              placeholder="First Name"
              autoComplete="off"
            />
            <input
              className="input-field"
              type="text"
              placeholder="Last Name"
              autoComplete="off"
            />
          </div>
          <div className={styles.verticalFieldsWrapper}>
            <input
              className="input-field"
              type="number"
              placeholder="Mobile Number"
              autoComplete="off"
            />
            <input
              className={`input-field ${styles.emailField}`}
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <button className={styles.updateBtn} type="submit">
            Update
          </button>
        </form>
      </section>
      <Footer />
    </>
  )
}
