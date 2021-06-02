import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../redux/actions/movies.actions"
import EmptyStarIcon from "../../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../../assets/buy_ticket/full_star.svg"
import { NavLink } from "react-router-dom"
import style from "./index.module.css"
import { useState } from "react"
import { useRef } from "react"
import TicaretMovieCardsContainerUI from "../../../fallbackUIs/moviesListContainerUI"

const MovieList = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.moviesList)
  const [loading, setLoading] = useState(true)
  const fetchMoviesFunctionRef = useRef(() => {})

  fetchMoviesFunctionRef.current = async () => {
    setLoading(true)
    try {
      dispatch(getMoviesList())
      setLoading(false)
    } catch (err) {
      console.log("error happened")
    }
  }
  useEffect(() => {
    fetchMoviesFunctionRef.current()
  }, [])
  if (loading) {
    return <TicaretMovieCardsContainerUI />
  } else {
    const movieList = movies?.movies?.map((movie) => {
      return (
        <div key={movie.id}>
          <div>
            <div className={style.imgMovie}>
              <NavLink
                to={`/ticaretor/${escape(movie.name)
                  .toLowerCase()
                  .replaceAll("%20", "-")}/movie-details`}
              >
                <img loading="lazy" src={movie.img_url} alt="movie img" />
              </NavLink>
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
    return <>{movieList}</>
  }
}

export default function Section2() {
  return (
    <section className={style.section2Wrapper}>
      <h2 className="sub-heading">Movies</h2>
      <div className={style.mcontainer}>
        <div className={style.movies_container}>
          <div className={style.movieCardsContainer}>
            <MovieList />
          </div>
        </div>
      </div>
    </section>
  )
}
