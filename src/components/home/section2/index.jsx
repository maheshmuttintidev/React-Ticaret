import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../redux/actions/movies.actions"
import TicaretMovieCardsContainerUI from "../../fallbackUIs/moviesListContainerUI"
import styles from "./index.module.css"
import StarRating from "./starRating"

export default function Section2() {
  const dispatch = useDispatch()
  const { isLoading, movieList: movies } = useSelector(
    (state) => state.moviesList
  )
  const fetchMoviesFunctionRef = useRef(() => {})

  useEffect(() => {
    fetchMoviesFunctionRef.current()
  }, [])

  fetchMoviesFunctionRef.current = async () => {
    try {
      dispatch(getMoviesList())
    } catch (err) {
      console.log(err)
    }
  }
  const loadMovieCard = () => {
    if (isLoading) {
      return <TicaretMovieCardsContainerUI />
    } else {
      let movie_card = movies?.movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <div>
              <div className={styles.imgMovie}>
                <img loading="lazy" src={movie.img_url} alt="movie img" />
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
      return movie_card
    }
  }
  return (
    <section className={styles.section2Wrapper}>
      <div>
        <h2 className="sub-heading">Movies</h2>
      </div>
      <div className={styles.mcontainer}>
        <div className={styles.movies_container}>
          <div className={styles.movieCardsContainer}>{loadMovieCard()}</div>
        </div>
      </div>
    </section>
  )
}
