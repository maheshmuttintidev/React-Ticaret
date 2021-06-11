import React from "react"
import styles from "./index.module.css"
import StarRating from "./starRating"
import { NavLink } from "react-router-dom"
export default function MovieCard({ movie }) {
  const {
    name,
    img_url,
    availability,
    languages,
    star_rating,
    half_star,
    empty_star,
    full_star,
  } = movie
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
        <StarRating
          rating={star_rating}
          full_star={full_star}
          half_star={half_star}
          empty_star={empty_star}
        />
        <p className={`${styles.paragraph} ${styles.movieCard}`}>
          {availability}
        </p>
        <p className={`${styles.paragraph} ${styles.movieCard}`}>{languages}</p>
      </div>
    </div>
  )
}
