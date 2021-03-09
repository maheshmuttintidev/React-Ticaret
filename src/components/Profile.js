import React, { Component, Suspense } from "react"; 
const ProfileMenu = React.lazy(() => import('./ProfileMenu'))
class Profile extends Component {
  render() {
    return (
      <main>
        <Suspense fallback={
          <div className="loader-1">
            <div className="loading-child"></div>
          </div>
        }>
          <ProfileMenu />
        </Suspense>
      </main>
    );
  }
}

export default Profile;