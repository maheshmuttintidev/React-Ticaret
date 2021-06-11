import React from "react"
import styles from "./index.module.css"

export default function StarRating({
  rating,
  full_star,
  half_star,
  empty_star,
}) {
  return (
    <>
      <span style={{ marginBottom: ".7rem" }}>{rating}</span>
      <div className={styles.starsWrapper}>
        <img loading="lazy" src={full_star} alt="star1" />
        <img loading="lazy" src={full_star} alt="star2" />
        <img loading="lazy" src={full_star} alt="star3" />
        <img loading="lazy" src={half_star} alt="star4" />
        <img loading="lazy" src={empty_star} alt="star5" />
      </div>
    </>
  )
}
