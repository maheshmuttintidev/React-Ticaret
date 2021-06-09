import React from "react"
import Header from "../../ticaretorPage/header"
import Footer from "../../ticaretorPage/footer"
import MoviesList from "./moviesList/index"
import styles from "./index.module.css"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

export default function BuyTickets() {
  const isLoggedIn = useSelector((state) => state.isLoggedin)
  const history = useHistory()
  if (!isLoggedIn) {
    history.push("/")
  }
  return (
    <>
      <Header />
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
