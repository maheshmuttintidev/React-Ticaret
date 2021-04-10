import React, { Component, Suspense } from "react"
import UserPage from './UserPage'
const UserProfileMenu = React.lazy(() => import('./UserProfileMenu'))
export default class UserProfile extends Component {
  render() {
    return (
      <main>
          <UserPage />
          <Suspense fallback={
            <div className="loader-1">
              <div className="loading-child"></div>
            </div>
          }>
            <UserProfileMenu />
          </Suspense>
        </main>
    )
  }
}
