import React, { Component } from "react"; 
// import {NavLink} from 'react-router-dom'
class CustomerHelp extends Component {
  render() {
    return (
      <main>
        <section className="flex-container auto-adjust">
          <h1 className="__h1">Contact Us</h1>
          <p className="_p">email : <span className="mark m-05"> ticaret@help.com</span></p>
          <p className="_p">phone : <span className="mark m-05"> 9603757304</span></p>
        </section>
      </main>
    );
  }
}

export default CustomerHelp;