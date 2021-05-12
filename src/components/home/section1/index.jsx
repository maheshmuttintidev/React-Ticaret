import Step1 from '../../../assets/body/resale.svg'
import Step2 from '../../../assets/body/buy_our_ticket.svg'
import Step3 from '../../../assets/body/getour_ticket.svg'
import './index.css'
export default function Section1() {
    return (
        <section className="section2-wrapper">
            <div>
                <h2 className="sub-heading">How it works?</h2>
            </div>
            <div>
                <div>
                    <img src={Step1} alt="" />
                    <h3 className="paragraph secondary-color">Reselling tickets</h3>
                    <p className="very-small-paragraph">
                        sell your ticket, you will be refunded <span className="secondary-color">70%</span> on it.
                    </p>
                </div>
                <div>
                    <img src={Step2} alt="" />
                    <h3 className="paragraph secondary-color">Buy Your tickets</h3>
                    <p className="very-small-paragraph">
                        buy our ticket for easy availability,security at your <span className="secondary-color">nearest theatre.</span>
                    </p>
                </div>
                <div>
                    <img src={Step3} alt="" />
                    <h3 className="paragraph secondary-color">Get Your tickets</h3>
                    <p className="very-small-paragraph">
                        after purchasing the <span className="secondary-color">ticket</span> we send it through message or gmail.
                    </p>
                </div>
            </div>
        </section>
    )
}