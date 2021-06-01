import React from "react"
import Header from "../ticaretorPage/header"
import Footer from "../ticaretorPage/footer"
import styles from "./index.module.css"
export default function BookedTickets() {
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
