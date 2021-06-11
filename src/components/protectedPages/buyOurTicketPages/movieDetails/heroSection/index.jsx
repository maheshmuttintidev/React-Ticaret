import React, { useEffect } from "react"
import styles from "./index.module.css"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../../redux/actions/movies.actions"
import StarRating from "../../buyTickets/movieCard/starRating"

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
    movie_icon,
    time_icon,
    full_star,
    half_star,
    empty_star,
    rating,
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
                    inset 40rem 0 20rem rgba(0, 0, 0, .6),
                    inset 40rem 0 22rem rgba(0, 0, 0, .7)`,
      }}
    >
      <h2 style={{ fontSize: "40px" }}>{name}</h2>
      <div className={styles.movieDetails}>
        <StarRating
          rating={rating}
          full_star={full_star}
          half_star={half_star}
          empty_star={empty_star}
        />
        <div style={{ marginTop: "1.5rem" }}>
          <p className={`${styles.paragraph} ${styles.movieCard}`}>
            {languages}
          </p>
          <div className={styles.flexRow}>
            <div>
              <img src={movie_icon} alt="" />
              <span>{movie_type}</span>
            </div>
            <div>
              <img src={time_icon} alt="" />
              <span>{duration}</span>
            </div>
            <div>
              <p className={`${styles.paragraph} ${styles.movieCard}`}>
                {availability}
              </p>
            </div>
          </div>
          <div>
            <p style={{ width: "40ch", color: "var(--hero-text-color)" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
