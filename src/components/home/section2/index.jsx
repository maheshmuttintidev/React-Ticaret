import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../redux/actions/movies.actions"
import EmptyStarIcon from "../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../assets/buy_ticket/full_star.svg"
import style from "./index.module.css"

export default function Section2() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.moviesList)

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  const loadMovieCard = () => {
    let movie_card = movies?.movies?.map((movie) => {
      return (
        <div key={movie.id}>
          <div>
            <div className={style.imgMovie}>
              <img loading="lazy" src={movie.img_url} alt="movie img" />
            </div>
          </div>
          <div className={style.movieDetails}>
            <div className={style.starsWrapper}>
              <img loading="lazy" src={FullStarIcon} alt="star1" />
              <img loading="lazy" src={FullStarIcon} alt="star2" />
              <img loading="lazy" src={FullStarIcon} alt="star3" />
              <img loading="lazy" src={HalfStarIcon} alt="star4" />
              <img loading="lazy" src={EmptyStarIcon} alt="star5" />
            </div>
            <h2>{movie.name}</h2>
            <p className={`${style.paragraph} ${style.movieCard}`}>
              {movie.availability}
            </p>
            <p className={`${style.paragraph} ${style.movieCard}`}>
              {movie.languages}
            </p>
          </div>
        </div>
      )
    })
    return movie_card
  }
  return (
    <section className={style.section2Wrapper}>
      <div>
        <h2 className="sub-heading">Movies</h2>
      </div>
      <div className={style.mcontainer}>
        <div className={style.movies_container}>
          <div className={style.movieCardsContainer}>{loadMovieCard()}</div>
        </div>
      </div>
    </section>
  )
}
