import {NavLink} from 'react-router-dom'
import './index.css'
export default function Hero() {
    return  (
        <section className="section1-wrapper">
            <div>
                <h2 className="heading">Wanna Sell Your Ticket?</h2>
                <p className="small-paragraph">
                    sell your tickets with us in a easier way and get more points.
                </p>
                <button type="button">
                    <NavLink className="nav-link paragraph" to="/login">Resale Your Ticket</NavLink>
                </button>
            </div>
            <div>
                <h2 className="heading">Buy your valuable Ticket</h2>
                <p className="small-paragraph">
                    Get your tickets, chill with your show and your security is our priority.
                    </p>
                <button className="paragraph" type="button">
                    <NavLink className="nav-link paragraph" to="/login">Buy Our Ticket</NavLink>
                </button>
            </div>
        </section>
    )
}