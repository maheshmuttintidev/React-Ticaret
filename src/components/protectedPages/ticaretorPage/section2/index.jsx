import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../redux/actions/movies.actions"
import { NavLink } from "react-router-dom"
import styles from "./index.module.css"
import TicaretMovieCardsContainerUI from "../../../fallbackUIs/moviesListContainerUI"
import StarRating from "./starRating"

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
            <StarRating
              rating={movie.star_rating}
              full_star={movie.full_star}
              half_star={movie.half_star}
              empty_star={movie.empty_star}
            />
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
