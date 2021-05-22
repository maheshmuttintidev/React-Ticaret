import { Movies as movies } from "../../../../assets/img_links/ImagesLinks"
import EmptyStarIcon from "../../../../assets/buy_ticket/empty_star.svg"
import HalfStarIcon from "../../../../assets/buy_ticket/half_star.svg"
import FullStarIcon from "../../../../assets/buy_ticket/full_star.svg"
import style from "./index.module.css"

export default function Section2() {
  const loadMovieCard = () => {
    let movie_card = movies.map((movie) => {
      return (
        <div>
          <div key={movie.id}>
            <div className={style.imgMovie}>
              <img loading="lazy" src={movie.img_url} alt="movie img" />
            </div>
          </div>
          <div key={movie.id} className={style.movieDetails}>
            <div className={style.starsWrapper}>
              <img loading="lazy" src={FullStarIcon} alt="star1" />
              <img loading="lazy" src={FullStarIcon} alt="star2" />
              <img loading="lazy" src={FullStarIcon} alt="star3" />
              <img loading="lazy" src={HalfStarIcon} alt="star4" />
              <img loading="lazy" src={EmptyStarIcon} alt="star5" />
            </div>
            <h2>{movie.name}</h2>
            <p className={`${style.paragraph} ${style.movieCard}`}>UA</p>
            <p className={`${style.paragraph} ${style.movieCard}`}>
              Telugu,Tamil,Kannada
            </p>
          </div>
        </div>
      )
    })
    return movie_card
  }
  return (
    <section className={style.section2Wrapper}>
      <h2 className="sub-heading">Movies</h2>
      <div className={style.mcontainer}>
        <div className={style.movies_container}>
          <div className={style.movieCardsContainer}>{loadMovieCard()}</div>
        </div>
      </div>
    </section>
  )
}
