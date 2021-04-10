import React, { Component } from 'react'
import UserHeader from './UserHeader'
import Footer from './Footer'
export default class UserLayout extends Component {
  render() {
    return (
      <div className="layout-container">
        <UserHeader />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
