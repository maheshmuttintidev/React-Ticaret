import React from "react"
import styles from "./index.module.css"

export default function TicaretMovieCardsContainerUI() {
  return (
    <div className={styles.moviesContainer}>
      <div className={styles.movieCardContainer}>
        <div className={styles.card}></div>
        <div className={styles.textMedium}></div>
        <div className={styles.textLarge}></div>
      </div>
      <div className={styles.movieCardContainer}>
        <div className={styles.card}></div>
        <div className={styles.textMedium}></div>
        <div className={styles.textLarge}></div>
      </div>
      <div className={styles.movieCardContainer}>
        <div className={styles.card}></div>
        <div className={styles.textMedium}></div>
        <div className={styles.textLarge}></div>
      </div>
      <div className={styles.movieCardContainer}>
        <div className={styles.card}></div>
        <div className={styles.textMedium}></div>
        <div className={styles.textLarge}></div>
      </div>
      <div className={styles.movieCardContainer}>
        <div className={styles.card}></div>
        <div className={styles.textMedium}></div>
        <div className={styles.textLarge}></div>
      </div>
    </div>
  )
}
