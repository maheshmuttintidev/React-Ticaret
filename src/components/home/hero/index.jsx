import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './index.css'
export default function Hero() {
    const history = useHistory()
    const isUserLoggedIn = useSelector(state => state.isLoggedin)
    const gotoLoginPopup = () => {
        history.push('/login')
    }

    const gotoResaleForm = () => {
        history.push("/")
    }

    const gotoBuyTicketPage = () => {
        history.push("/")
    }
    return  (
        <section className="section1-wrapper">
            <div>
                <h2 className="heading">Wanna Sell Your Ticket?</h2>
                <p className="small-paragraph">
                    sell your tickets with us in a easier way and get more points.
                </p>
                <button className="paragraph" type="button" onClick={isUserLoggedIn ? gotoResaleForm : gotoLoginPopup}>
                    Resale Your Ticket
                </button>
            </div>
            <div>
                <h2 className="heading">Buy your valuable Ticket</h2>
                <p className="small-paragraph">
                    Get your tickets, chill with your show and your security is our priority.
                    </p>
                <button className="paragraph" type="button" onClick={isUserLoggedIn ? gotoBuyTicketPage : gotoLoginPopup}>
                    Buy Our Ticket
                </button>
            </div>
        </section>
    )
}