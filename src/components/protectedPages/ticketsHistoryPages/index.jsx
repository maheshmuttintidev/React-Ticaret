import React from "react"
import Header from "../ticaretorPage/header"
import Footer from "../ticaretorPage/footer"
import styles from "./index.module.css"
export default function TicketsHistory() {
  return (
    <>
      <Header />
      <section className={styles.ticketsHistoryWrapper}>
        <h2>There is no ticket history!!!</h2>
      </section>
      <Footer />
    </>
  )
}
