import React from "react"
import Header from "../ticaretorPage/header"
import Footer from "../ticaretorPage/footer"
import styles from "./index.module.css"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
export default function BookedTickets() {
  const isLoggedIn = useSelector((state) => state.isLoggedin)
  const history = useHistory()
  if (!isLoggedIn) {
    history.push("/")
  }
  return (
    <>
      <Header />
      <section className={styles.bookedTicketsWrapper}>
        <h2>There is no tickets booked!!!</h2>
      </section>
      <Footer />
    </>
  )
}
