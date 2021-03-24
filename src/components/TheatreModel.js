import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ArrowLeft from '../assets/buy_ticket/arrow-back.svg'
export default class TheatreModel extends Component {

    render() {
        return (
            <div className="fixed-page">
                <div className="auto-adjust-vertical theatre-model-header">
                    <div className="theatre-details-top">
                        <img src={ArrowLeft} alt="" className="theatre-back-icon" />
                        <div className="">
                            <h2 className="">
                                AMB Cinema: Gachibowli
                            </h2>
                            <p>Sun 28 feb</p>
                            <div className="">
                                <button className="theatre-timing-btn _70_percent">
                                    <NavLink to="/theatre-model" className="make-link">
                                        10:00PM
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}