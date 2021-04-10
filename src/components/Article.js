import React, { Component, Suspense, lazy } from "react";
import {HashRouter, Route, RouteMatch} from "react-router-dom"
import '../css/ticaret.css'
const Home = lazy(() => import('./Home'))
const Login = lazy(() => import('../containers/Login'))
const Register = lazy(() => import('../containers/Register'))
const Location = lazy(() => import('./Location'))
const Profile = lazy(() => import('./Profile'))
const AboutUs = lazy(() => import('./AboutUs'))
const BuyTickets = lazy(() => import('./BuyTickets'))
const MovieDetails = lazy(() => import('./MovieDetails'))
const TheatreModel = lazy(() => import('./TheatreModel'))
const ResaleTicketFilling = lazy(() => import ('./ResaleTicketFilling'))
const TicketsHistory = lazy(() => import('./TicketsHistory'))
const UserPage = lazy(() => import('./UserPage'))
const UserProfile = lazy(() => import('./UserProfile'))
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
                        <Route path="/location" component={Location} />
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
                        <Route path="/user-profile" component={UserProfile} />
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
                        <Route path="/buy-tickets" component={BuyTickets} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route path="/movie-details" component={MovieDetails} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route path="/theatre-model" component={TheatreModel} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route path="/resale-ticket-filling" component={ResaleTicketFilling} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                        <div className="loading-child"></div>
                    </div>
                    }>
                        <Route path="/tickets-history" component={TicketsHistory} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <div className="loading-child"></div>
                        </div>
                    }>
                        <Route path="/user" component={UserPage} />
                    </Suspense>
                </HashRouter>
            </article>
        )
    }
}
