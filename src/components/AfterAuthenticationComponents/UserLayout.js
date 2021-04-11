import React, { Component } from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
export default class UserLayout extends Component {
  render() {
    return (
      <div className="layout-container">
        <UserHeader />
          {this.props.children}
        <UserFooter />
      </div>
    );
  }
}
