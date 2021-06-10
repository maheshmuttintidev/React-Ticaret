import React, { useEffect } from "react"
import EmptyStarIcon from "../../../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../../../assets/buy_ticket/full_star.svg"
import MovieTypeIcon from "../../../../../assets/buy_ticket/movie_icon.svg"
import TimerIcon from "../../../../../assets/buy_ticket/time_icon.svg"
import styles from "./index.module.css"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../../redux/actions/movies.actions"

export default function MovieDetailsHeroSection() {
  const dispatch = useDispatch()
  let movies = useSelector((state) => state.moviesList)
  let { moviename } = useParams()

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  movies = movies?.movieList?.movies

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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        boxShadow: `inset 20rem 0 5rem rgba(0, 0, 0, .4),
                    inset 30rem 0 10rem rgba(0, 0, 0, .4),
                    inset 50rem 0 15rem rgba(0, 0, 0, .4),
                    inset 10rem 0 10rem rgba(0, 0, 0, 1),
                    inset 40rem 0 15rem rgba(0, 0, 0, .6)`,
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
        <div style={{ marginTop: "1.5rem" }}>
          <p className={`${styles.paragraph} ${styles.movieCard}`}>
            {availability}
          </p>
          <p className={`${styles.paragraph} ${styles.movieCard}`}>
            {languages}
          </p>
          <div className={styles.flexRow}>
            <div>
              <img src={MovieTypeIcon} alt="" />
              <span>{movie_type}</span>
            </div>
            <div>
              <img src={TimerIcon} alt="" />
              <span>{duration}</span>
            </div>
          </div>
          <div>
            <p style={{ width: "40ch" }}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
