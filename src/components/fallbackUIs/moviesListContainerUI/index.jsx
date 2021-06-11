import React from "react"
import MovieCard from "./movieCard"
import styles from "./index.module.css"

export default function TicaretMovieCardsContainerUI() {
  return (
    <div className={styles.moviesContainer}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}
