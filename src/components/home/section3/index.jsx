import AhaIcon from '../../../assets/body/aha.svg'
import BookMyShowIcon from '../../../assets/body/bookmyshow.svg'
import NetflixIcon from '../../../assets/body/netflex.svg'
import PrimeVideoIcon from '../../../assets/body/prime_video.svg'
import style from './index.module.css'

export default function Section3() {
    return (
        <section className={style.section3Wrapper}>
            <div style={{marginBottom: "35px !important"}}>
                <h3 className="sub-heading">Partners</h3>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img src={BookMyShowIcon} alt="" />
                <img src={NetflixIcon} alt="" />
                <img src={PrimeVideoIcon} alt="" />
                <img src={AhaIcon} alt="" />
            </div>
        </section>
    )
}