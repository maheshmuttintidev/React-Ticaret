import React, { Component, Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
const Login = lazy(() => import('../containers/Login'))
const Register = lazy(() => import('../containers/Register'))
const Home = lazy(() => import('./BeforeAuthenticationComponents/Home'))
const Location = lazy(() => import('./BeforeAuthenticationComponents/Location'))
const Profile = lazy(() => import('./BeforeAuthenticationComponents/Profile'))
const AboutUs = lazy(() => import('./BeforeAuthenticationComponents/AboutUs'))
const BuyTickets = lazy(() => import('./AfterAuthenticationComponents/BuyTickets'))
const MovieDetails = lazy(() => import('./AfterAuthenticationComponents/MovieDetails'))
const TheatreModel = lazy(() => import('./AfterAuthenticationComponents/TheatreModel'))
const ResaleTicketFilling = lazy(() => import('./AfterAuthenticationComponents/ResaleTicketFilling'))
const TicketsHistory = lazy(() => import('./AfterAuthenticationComponents/TicketsHistory'))
const UserPage = lazy(() => import('./AfterAuthenticationComponents/UserPage'))
const UserProfile = lazy(() => import('./AfterAuthenticationComponents/UserProfile'))
const FillResalerDetails = lazy(() => import('./AfterAuthenticationComponents/FillResalerDetails'))
const UserTicaretTicket = lazy(() => import('./AfterAuthenticationComponents/UserTicaretTicket'))
const UpdateProfile = lazy(() => import('./AfterAuthenticationComponents/UpdateProfile'))
const ForgotPassword = lazy(() => import('../containers/ForgotPassword'))
export default class Article extends Component {
    render() {
        return (
            <article className="main">
                <Router forceRefresh={true}>
                    
                        <Suspense fallback={
                            <div className="loader-1">
                                <div className="loading-child"></div>
                            </div>
                        }>
                            <Route exact path="/" component={Home} default />
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
                            <Route exact path="/user" component={UserPage} />
                        </Suspense>
                        <Suspense fallback={
                            <div className="loader-1">
                                <div className="loading-child"></div>
                            </div>
                        }>
                            <Route path="/fill-ur-details" component={FillResalerDetails} />
                        </Suspense>
                        <Suspense fallback={
                            <div className="loader-1">
                                <div className="loading-child"></div>
                            </div>
                        }>
                            <Route path="/user-ticaret-ticket" component={UserTicaretTicket} />
                        </Suspense>
                        <Suspense fallback={
                            <div className="loader-1">
                                <div className="loading-child"></div>
                            </div>
                        }>
                            <Route path="/update-profile" component={UpdateProfile} />
                        </Suspense>
                        <Suspense fallback={
                            <div className="loader-1">
                                <div className="loading-child"></div>
                            </div>
                        }>
                            <Route path="/forgot-password" component={ForgotPassword} />
                        </Suspense>
                    
                </Router>
            </article>
        )
    }
}

// <Route path="*" component={() => {
//     return (
//         <div className="perfect-center min-all-100 mt-4">
//             <div className="img-404-container">
//             </div>
//             <p className="text-center">404 Not Found</p>
//         </div>
//     )
// }
// } />