import React, { useEffect } from "react"
import EmptyStarIcon from "../../../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../../../assets/buy_ticket/full_star.svg"
import styles from "./index.module.css"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../../redux/actions/movies.actions"

export default function MovieDetailsHeroSection({ movieDetails }) {
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state?.moviesList)
  let { moviename } = useParams()

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  moviename = moviename
    .replaceAll("-", " ")
    .split(" ")
    .map((i) => i.toUpperCase())
    .join(" ")

  let moviesListData = Object.assign(
    {},
    movies?.find((movie) => moviename === movie.name)
  )
  const {
    name,
    landscape_img_url,
    languages,
    availability,
    movie_type,
    duration,
    description,
  } = moviesListData
  return (
    <section
      className={styles.moveDetailsHeroWrapper}
      style={{
        backgroundImage: `url(${landscape_img_url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "80%",
      }}
    >
      <h2>{name}</h2>
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
        <div className={styles.flexRow}>
          <span>{movie_type}</span>
          <span>{duration}</span>
        </div>
        <div>
          <p style={{ width: "40ch" }}>{description}</p>
        </div>
      </div>
    </section>
  )
}
