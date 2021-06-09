import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMoviesList } from "../../../../redux/actions/movies.actions"
import { useDispatch, useSelector } from "react-redux"
import MovieDetailsHeroSection from "./heroSection"
import Header from "../../ticaretorPage/header"
import Footer from "../../ticaretorPage/footer"
import styles from "./index.module.css"

export default function MovieDetails() {
  const { moviename } = useParams()
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.moviesList)

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch])

  const movieDetails = Object.assign(
    {},
    movies?.find((movie) => (movie.name = moviename))
  )
  return (
    <>
      <Header />
      <section className={styles.movieDetailsWrapper}>
        <MovieDetailsHeroSection
          key={movieDetails?.id}
          movieDetails={movieDetails}
        />
      </section>
      <Footer />
    </>
  )
}
