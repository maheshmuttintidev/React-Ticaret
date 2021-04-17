import React, { Component, createRef } from 'react'
import {NavLink} from 'react-router-dom'
const modalRef = createRef()
export default class TermsOfCondition extends Component {

    closeModal = () => {
        modalRef.current.style.display = 'none'
    }

    render() {
        return (
        <div ref={modalRef} className="overlay-fixed">
            <h3>Terms and conditions</h3>
            <p>Welcome to Ticaret, Here are some terms and condition about our website</p>
            <ol className="">
                <li>After buying ticket from our website, you'll get a new ticket from our side. </li>
                <li>Ticket can be uploaded on before 2 hours of the show.</li>
                <li>Refund will be done within 2-3 days for seller. </li>
                <li>Multiple tickets can be sold by one user. </li>
                <li>If your ticket was not sold, here is a solution i.e., you will get some extra points
                to sell your ticket. </li>
                <li>Reselling of ticaret ticket in ticaret websites is prohibited for seller.</li>
                <li>Ticket can't be sell with extra amount it can be sold with actual price.</li>
                <li>If in any least cases, you cancel ticket, refund will be done within 2-3 days for
                buyer.</li>
            </ol>
            <button onClick={this.closeModal} className="form-btn transparent-bg">Cancel</button>
            <NavLink className="spread-all text-white remove-underline" to="/user/ticaret-ticket">Accept</NavLink>
        </div>
        )
    }
}

