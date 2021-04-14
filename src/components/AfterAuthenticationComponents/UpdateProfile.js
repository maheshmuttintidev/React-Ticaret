import React, {Component} from 'react'
import UserLayout from './UserLayout'

export default class UpdateProfile extends Component {
    
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/user')
    }
    render() {
        return (
            <UserLayout>
                <div className="auto-adjust">
                    <p>Edit Profile</p>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="flex">
                            <input className="input-field fname" type="text" minLength="6" maxLength="20" name="firstName" placeholder="First Name" onChange={this.setTheData} required/>
                            <input className="input-field lname ml-3" type="text" minLength="6" maxLength="20" name="lastName" placeholder="Last Name" onChange={this.setTheData} required/>
                        </div>
                        <input className="input-field rmobile" minLength="10" maxLength="10" max="9999999999" type="number" name="phoneNumber" pattern="[-+]?[0-9]" placeholder="Mobile Number" onChange={this.setTheData} required/><br />
                        <input className="input-field remail" type="email" minLength="8" maxLength="50" name="email" placeholder="Email" onChange={this.setTheData} required/><br />
                        <button className="form-btn register white">Update</button>
                    </form>
                </div>
            </UserLayout>
        )
    }
}   