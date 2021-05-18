import { Movies as movies } from '../../../assets/img_links/ImagesLinks'
import EmptyStarIcon from '../../../assets/buy_ticket/empty_star.svg'
import HalfStarIcon from '../../../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../../../assets/buy_ticket/full_star.svg'
import './index.css'

export default function Section2() {
    const loadMovieCard = () => {
        let movie_card = movies.map(movie => {
            return (
                <div key={movie.id}>
                    <div className="img-movie">
                        <img loading="lazy" src={movie.img_url} alt="movie img" />
                    </div>
                </div>
            )
        })
        return movie_card
    }

    const loadMovieDetails = () => {
        let movie_details = movies.map(movie => {
            return (
                <div key={movie.id} className="movie-details">
                    <div className="star-rating-container">
                        <img loading="lazy" src={FullStarIcon} alt="star1" />
                        <img loading="lazy" src={FullStarIcon} alt="star2" />
                        <img loading="lazy" src={FullStarIcon} alt="star3" />
                        <img loading="lazy" src={HalfStarIcon} alt="star4" />
                        <img loading="lazy" src={EmptyStarIcon} alt="star5" />
                    </div>
                    <h2 className="mini-sub-heading">{movie.name}</h2>
                    <p className="paragraph movie-card">UA</p>
                    <p className="paragraph movie-card">Telugu,Tamil,Kannada</p>
                </div>
            )
        })
        return movie_details
    }
    return (
        <section className="section3-wrapper">
            <div>
                <h2 className="sub-heading">Movies</h2>
            </div>
            <div className="mcontainer">
                <div className="movies_container">
                    <div className="movie-cards-container">
                        {loadMovieCard()}
                    </div>
                    <div className="movie-details-container">
                        {loadMovieDetails()}
                    </div>
                </div>
            </div>
        </section>
    )
}