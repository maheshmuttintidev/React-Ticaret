import React, { useEffect } from "react"
import { getMoviesList } from "../../../../../redux/actions/movies.actions"
import { useDispatch, useSelector } from "react-redux"
import styles from "./index.module.css"
import MovieCard from "../movieCard"
import TicaretMovieCardsContainerUI from "../../../../fallbackUIs/moviesListContainerUI"

export default function MoviesList() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.moviesList)
  const movies = useSelector((state) => state.moviesList)
  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  if (isLoading) {
    return (
      <div style={{ margin: "0 3.2rem" }}>
        <TicaretMovieCardsContainerUI />
      </div>
    )
  } else {
    return (
      <section className={styles.moviesListContainer}>
        {movies?.movieList?.movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    )
  }
}
