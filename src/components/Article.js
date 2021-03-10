import React, { Component, Suspense, lazy } from "react";
import {HashRouter, Route} from "react-router-dom"
import '../css/ticaret.css'
const Home = lazy(() => import('./Home'))
const Login = lazy(() => import('./Login'))
const Location = lazy(() => import('./Location'))
const Profile = lazy(() => import('./Profile'))
const AboutUs = lazy(() => import('./AboutUs'))
const CustomerHelp = lazy(() => import('./CustomerHelp'))

export default class Article extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        showPopup: false
    //     }
    //   }
    render() {
        return (
            <article className="main">
                <HashRouter>
                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        <Route exact path="/" component={Home} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        <Route exact path="/location" component={Location} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        {/* {this.state.showPopup ? <Login closePopup={this.togglePopup.bind(this)} /> : null } */}
                        <Route path="/login" component={Login} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        <Route path="/profile" component={Profile} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route exact path="/about-us" component={AboutUs} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        <Route exact path="/customer-help" component={CustomerHelp} />
                    </Suspense>
                </HashRouter>
            </article>
        )
    }
}
