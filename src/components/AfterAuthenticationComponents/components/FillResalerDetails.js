import React, {Component} from 'react'
import UserLayout from '../layout/UserLayout'
import {NavLink} from 'react-router-dom'

export default class FillResalerDetailse extends Component {
    
    render() {
        return (
            <UserLayout>
                <form method="POST" className="flex-column center mb-2 mt-2">
                    <input className="input-field" type="number" placeholder="Account Number" />
                    <input className="input-field" type="text" placeholder="Card Holder Name" />
                    <input className="input-field" type="text" placeholder="IFSC code" />
                    <NavLink to="/user" className="form-btn form-btn-ticket-form" type="submit">Submit</NavLink>
                </form>
            </UserLayout>
        )
    }
}