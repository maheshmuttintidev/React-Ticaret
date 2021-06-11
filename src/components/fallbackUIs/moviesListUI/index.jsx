import React from "react"
import styles from "./index.module.css"
import MovieCard from "./movieCard"

export default function MoviesListUI() {
  return (
    <div className={styles.moviesContainer}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}
