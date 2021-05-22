import {useHistory} from 'react-router-dom'
import style from './index.module.css'
export default function Hero() {
    const history = useHistory()
    const gotoResaleForm = () => {
        history.push("/ticaretor/resale-ticket-form")
    }
    const gotoBuyTicketPage = () => {
        history.push("/")
    }
    return  (
        <section className={style.heroWrapper}>
            <div>
                <h2 className="heading">Wanna Sell Your Ticket?</h2>
                <p className="small-paragraph">
                    sell your tickets with us in a easier way and get more points.
                </p>
                <button className="paragraph" type="button" onClick={gotoResaleForm}>
                    Resale Your Ticket
                </button>
            </div>
            <div>
                <h2 className="heading">Buy your valuable Ticket</h2>
                <p className="small-paragraph">
                    Get your tickets, chill with your show and your security is our priority.
                    </p>
                <button className="paragraph" type="button" onClick={gotoBuyTicketPage}>
                    Buy Our Ticket
                </button>
            </div>
        </section>
    )
}