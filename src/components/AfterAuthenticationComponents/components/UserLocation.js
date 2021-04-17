import React, { Component } from "react"
import UserLayout from "../layout/UserLayout"
class Location extends Component {
  render() {
    return (
      <UserLayout>
        <main>
          <section className="container location-container">
            <h1>This is a Location Page</h1>
          </section>
        </main>
      </UserLayout>
    )
  }
}

export default Location