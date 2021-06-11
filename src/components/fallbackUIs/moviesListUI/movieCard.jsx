import React from "react"
import styles from "./index.module.css"

export default function MovieCard() {
  return (
    <>
      <div className={styles.movieCardContainer}>
        <div className={styles.card}></div>
        <div className={styles.stars}></div>
        <div className={styles.textLong}></div>
        <div className={styles.textSmall}></div>
        <div className={styles.textMedium}></div>
      </div>
    </>
  )
}
