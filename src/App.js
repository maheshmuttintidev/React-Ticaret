
import React, { Component, Suspense, lazy } from 'react'

const Ticaret = lazy(() => import('./components/TicaretWebsite'))

class App extends Component {
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

export default App;
