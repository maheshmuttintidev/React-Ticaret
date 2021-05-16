import AhaIcon from '../../../assets/body/aha.svg'
import BookMyShowIcon from '../../../assets/body/bookmyshow.svg'
import NetflixIcon from '../../../assets/body/netflex.svg'
import PrimeVideoIcon from '../../../assets/body/prime_video.svg'
import './index.css'

export default function Section3() {
    return (
        <section className="section4-wrapper">
            <div>
                <h3 className="sub-heading">Partners</h3>
            </div>
            <div>
                <img src={BookMyShowIcon} alt="" />
                <img src={NetflixIcon} alt="" />
                <img src={PrimeVideoIcon} alt="" />
                <img src={AhaIcon} alt="" />
            </div>
        </section>
    )
}