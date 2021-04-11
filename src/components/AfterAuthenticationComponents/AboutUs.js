import React, { Component } from "react"
import UserLayout from './UserLayout'

export default class AboutUs extends Component {
  render() {
    return (
      <UserLayout>
        <main>
          <section className="flex-container auto-adjust">
            <h1 className="__h2">Ticaret:</h1>
            <p className="normal_p">Ticaret is a brand company to virtual ticket resale.</p>
            <ul>
              <li className="normal_p">Here U can <span className="mark">Resell</span> your unnecessary ticket/ tickets</li>
              <li className="normal_p">U will get the <span className="mark">70% of amount</span> whenever ticket gets purchased by other after you put that ticket in this Ticaret Website</li>
              <li className="normal_p">Hence, U are <span className="mark">saving the ticket</span> and you will get the 70% of amount instead of losing total amount U paid for the ticket</li>
            </ul>
          </section>
        </main>
      </UserLayout>
    );
  }
}
