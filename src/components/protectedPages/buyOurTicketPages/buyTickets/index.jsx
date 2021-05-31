import React from "react"
import Header from "../../ticaretorPage/header"
import Footer from "../../ticaretorPage/footer"
import MoviesList from "./moviesList/index"
import styles from "./index.module.css"

export default function BuyTickets() {
  const fullName = JSON.parse(sessionStorage.getItem("userData"))?.name
  return (
    <>
      <Header fullName={fullName} />
      <section className={styles.moviesLanguages}>
        <button className={styles.btnLanguage}>Telugu</button>
        <button className={styles.btnLanguage}>Hindi</button>
        <button className={styles.btnLanguage}>English</button>
        <button className={styles.btnLanguage}>Malayalam</button>
      </section>
      <MoviesList />
      <Footer />
    </>
  )
}
