import React from "react"
import styles from "./index.module.css"
import EmptyStarIcon from "../../../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../../../assets/buy_ticket/full_star.svg"
import { NavLink } from "react-router-dom"
export default function MovieCard({ movie }) {
  const { name, img_url, availability, languages } = movie
  return (
    <div>
      <NavLink
        to={`/ticaretor/${escape(name)
          .toLowerCase()
          .replaceAll("%20", "-")}/movie-details`}
      >
        <img className={styles.movieCardImage} src={img_url} alt={name} />
      </NavLink>
      <h1>{name}</h1>
      <div className={styles.movieDetails}>
        <div className={styles.starsWrapper}>
          <img loading="lazy" src={FullStarIcon} alt="star1" />
          <img loading="lazy" src={FullStarIcon} alt="star2" />
          <img loading="lazy" src={FullStarIcon} alt="star3" />
          <img loading="lazy" src={HalfStarIcon} alt="star4" />
          <img loading="lazy" src={EmptyStarIcon} alt="star5" />
        </div>
        <p className={`${styles.paragraph} ${styles.movieCard}`}>
          {availability}
        </p>
        <p className={`${styles.paragraph} ${styles.movieCard}`}>{languages}</p>
      </div>
    </div>
  )
}
