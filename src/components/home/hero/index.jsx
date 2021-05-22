import {useHistory} from 'react-router-dom'
import style from './index.module.css'
export default function Hero() {
    const history = useHistory()
    const gotoLoginPopup = () => {
        history.push('/login')
    }
    return  (
        <section className={style.heroWrapper}>
            <div>
                <h2 className="heading">Wanna Sell Your Ticket?</h2>
                <p className="small-paragraph">
                    sell your tickets with us in a easier way and get more points.
                </p>
                <button className="paragraph" type="button" onClick={gotoLoginPopup}>
                    Resale Your Ticket
                </button>
            </div>
            <div>
                <h2 className="heading">Buy your valuable Ticket</h2>
                <p className="small-paragraph">
                    Get your tickets, chill with your show and your security is our priority.
                    </p>
                <button className="paragraph" type="button" onClick={gotoLoginPopup}>
                    Buy Our Ticket
                </button>
            </div>
        </section>
    )
}