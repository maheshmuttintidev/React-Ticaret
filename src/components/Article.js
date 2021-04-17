import React, { Component, Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"
import { ProtectedRoute } from '../routes/ProtectedRoute'
const Login = lazy(() => import('../containers/Login'))
const Register = lazy(() => import('../containers/Register'))
const Home = lazy(() => import('./BeforeAuthenticationComponents/Home'))
const Location = lazy(() => import('./BeforeAuthenticationComponents/Location'))
const UserLocation = lazy(() => import('./AfterAuthenticationComponents/components/UserLocation'))
const Profile = lazy(() => import('./BeforeAuthenticationComponents/Profile'))
const AboutUs = lazy(() => import('./AfterAuthenticationComponents/components/AboutUs'))
const BuyTickets = lazy(() => import('./AfterAuthenticationComponents/components/BuyTickets'))
const MovieDetails = lazy(() => import('./AfterAuthenticationComponents/components/MovieDetails'))
const TheatreModel = lazy(() => import('./AfterAuthenticationComponents/components/TheatreModel'))
const ResaleTicketFilling = lazy(() => import('./AfterAuthenticationComponents/components/ResaleTicketFilling'))
const TicketsHistory = lazy(() => import('./AfterAuthenticationComponents/components/TicketsHistory'))
const UserPage = lazy(() => import('./AfterAuthenticationComponents/components/UserPage'))
const UserProfile = lazy(() => import('./AfterAuthenticationComponents/components/UserProfile'))
const FillResalerDetails = lazy(() => import('./AfterAuthenticationComponents/components/FillResalerDetails'))
const UserTicaretTicket = lazy(() => import('./AfterAuthenticationComponents/components/UserTicaretTicket'))
const TermsOfCondition = lazy(() => import('./AfterAuthenticationComponents/components/TermsOfCondition'))
const UpdateProfile = lazy(() => import('./AfterAuthenticationComponents/components/UpdateProfile'))
const ForgotPassword = lazy(() => import('../containers/ForgotPassword'))

export default class Article extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: sessionStorage.getItem("name") ? sessionStorage.getItem("name").split(' ').join('-') : ''
        }
    }
    componentDidMount() {
        this.setState({
            username: this.state.username.toLowerCase()
        })
    }
    render() {
        return (
            <Switch>
                <article className="main">
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route exact path="/" component={Home} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute exact path="/user" component={UserPage} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/terms-and-conditions" component={TermsOfCondition} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route exact path="/location" component={Location} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route exact path="/user/location" component={UserLocation} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route path="/login" component={Login} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route path="/register" component={Register} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route path="/profile" component={Profile} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/profile" component={UserProfile} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/about-us" component={AboutUs} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/buy-tickets" component={BuyTickets} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/movie-details" component={MovieDetails} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/theatre-model" component={TheatreModel} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/resale-ticket-filling" component={ResaleTicketFilling} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/tickets-history" component={TicketsHistory} />
                    </Suspense>

                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/fill-ur-details" component={FillResalerDetails} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/ticaret-ticket" component={UserTicaretTicket} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <ProtectedRoute path="/user/update-profile" component={UpdateProfile} />
                    </Suspense>
                    <Suspense fallback={
                        <div className="loader-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 144.84 60">
                                <g id="Group_191" dataname="Group 191" transform="translate(102 417)">
                                    <g id="Group_3" dataname="Group 3" transform="translate(-58.343 -399.994)">
                                        <path className="load-path1" dataname="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-765.112 -469.261)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                        <path className="load-path2" dataname="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2817.51 678.681)" fill="none" stroke="#ff2424" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }>
                        <Route path="/forgot-password" component={ForgotPassword} />
                    </Suspense>
                </article>
            </Switch>
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