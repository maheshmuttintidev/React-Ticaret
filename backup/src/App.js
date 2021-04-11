import React, { Component, Suspense, lazy } from 'react'
const Ticaret = lazy(() => import('./components/TicaretWebsite'))

export default class App extends Component {
    render() {
      return (
        <Suspense fallback={
          <div className="loader-1">
            <div className="loading-child"></div>
          </div>
        }>
          <Ticaret />
        </Suspense>
      );
    }
}
