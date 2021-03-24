import React, { Component, Suspense, lazy } from "react";
import {HashRouter, Route} from "react-router-dom"
import '../css/ticaret.css'
const Home = lazy(() => import('./Home'))
const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))
const Location = lazy(() => import('./Location'))
const Profile = lazy(() => import('./Profile'))
const AboutUs = lazy(() => import('./AboutUs'))
const BuyTickets = lazy(() => import('./BuyTickets'))
const MovieDetails = lazy(() => import('./MovieDetails'))
const TheatreModel = lazy(() => import('./TheatreModel'))
export default class Article extends Component {
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
                        <Route path="/login" component={Login} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        <Route path="/register" component={Register} />
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
                        <Route exact path="/buy-tickets" component={BuyTickets} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route exact path="/movie-details" component={MovieDetails} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route exact path="/theatre-model" component={TheatreModel} />
                    </Suspense>
                </HashRouter>
            </article>
        )
    }
}
