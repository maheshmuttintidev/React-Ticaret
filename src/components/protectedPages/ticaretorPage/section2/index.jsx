import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../redux/actions/movies.actions"
import EmptyStarIcon from "../../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../../assets/buy_ticket/full_star.svg"
import { NavLink } from "react-router-dom"
import styles from "./index.module.css"
import TicaretMovieCardsContainerUI from "../../../fallbackUIs/moviesListContainerUI"

const MovieList = () => {
  const dispatch = useDispatch()
  const { isLoading, movieList: movies } = useSelector(
    (state) => state.moviesList
  )
  const fetchMoviesFunctionRef = useRef(() => {})

  fetchMoviesFunctionRef.current = async () => {
    try {
      dispatch(getMoviesList())
    } catch (err) {
      console.log("error happened")
    }
  }
  useEffect(() => {
    fetchMoviesFunctionRef.current()
  }, [])

  if (isLoading) {
    return <TicaretMovieCardsContainerUI />
  } else {
    const movieList = movies?.movies?.map((movie) => {
      return (
        <div key={movie.id}>
          <div>
            <div className={styles.imgMovie}>
              <NavLink
                to={`/ticaretor/${escape(movie.name)
                  .toLowerCase()
                  .replaceAll("%20", "-")}/movie-details`}
              >
                <img loading="lazy" src={movie.img_url} alt="movie img" />
              </NavLink>
            </div>
          </div>
          <div className={styles.movieDetails}>
            <div className={styles.starsWrapper}>
              <img loading="lazy" src={FullStarIcon} alt="star1" />
              <img loading="lazy" src={FullStarIcon} alt="star2" />
              <img loading="lazy" src={FullStarIcon} alt="star3" />
              <img loading="lazy" src={HalfStarIcon} alt="star4" />
              <img loading="lazy" src={EmptyStarIcon} alt="star5" />
            </div>
            <h2>{movie.name}</h2>
            <p className={`${styles.paragraph} ${styles.movieCard}`}>
              {movie.availability}
            </p>
            <p className={`${styles.paragraph} ${styles.movieCard}`}>
              {movie.languages}
            </p>
          </div>
        </div>
      )
    })
    return <>{movieList}</>
  }
}

export default function Section2() {
  return (
    <section className={styles.section2Wrapper}>
      <h2 className="sub-heading">Movies</h2>
      <div className={styles.mcontainer}>
        <div className={styles.movies_container}>
          <div className={styles.movieCardsContainer}>
            <MovieList />
          </div>
        </div>
      </div>
    </section>
  )
}
