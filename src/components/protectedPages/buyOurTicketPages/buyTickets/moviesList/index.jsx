import React, { useEffect } from "react"
import { getMoviesList } from "../../../../../redux/actions/movies.actions"
import { useDispatch, useSelector } from "react-redux"
import styles from "./index.module.css"
import MovieCard from "../movieCard"

export default function MoviesList() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.moviesList)
  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  return (
    <section className={styles.moviesListContainer}>
      {movies?.movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  )
}
