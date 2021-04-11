import React, { Component } from "react"
import UserLocation from "./UserLocation"
class Location extends Component {
  render() {
    return (
      <UserLocation>
        <main>
          <section className="container location-container">
            <h1>This is a Location Page</h1>
          </section>
        </main>
      </UserLocation>
    )
  }
}

export default Location