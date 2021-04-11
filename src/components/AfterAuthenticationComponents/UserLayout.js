import React, { Component } from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
export default class UserLayout extends Component {
  render() {
    return (
      <>
        <UserHeader />
          {this.props.children}
        <UserFooter />
      </>
    );
  }
}
