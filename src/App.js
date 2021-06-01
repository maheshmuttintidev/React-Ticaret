import Home from './components/home/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './containers/Login'
import Location from './components/home/location'
import NotFound from './components/errorPage'
import Register from './containers/Register'
import ForgotPasswordModel from './containers/ForgotPasswordModel'
import Ticaretor from './components/protectedPages/ticaretorPage/ticaretor'
import About from './components/aboutusPage/about'
import ResaleTicketForm from './components/protectedPages/sellYourTicketPages/resaleTicketForm'
import AccountDetails from './components/protectedPages/sellYourTicketPages/accountDetails'
import BuyTickets from './components/protectedPages/buyOurTicketPages/buyTickets'
import MovieDetails from './components/protectedPages/buyOurTicketPages/movieDetails'
import BookedTickets from './components/protectedPages/bookedTicketsPages'
import TicketsHistory from './components/protectedPages/ticketsHistoryPages'
import Settings from './components/protectedPages/settings'

function App() {
  const userId = JSON.parse(sessionStorage.getItem("userData"))?.userId
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" render={props => (
            <Home {...props} userId={userId} />
          )} />
          <Route exact path="/login" render={props => (
            <Login {...props} userId={userId} />
          )} />
          <Route exact path="/register" render={props => (
            <Register {...props} userId={userId} />
          )} />
          <Route exact path="/forgot-password" render={props => (
            <ForgotPasswordModel {...props} userId={userId} />
          )} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/about" component={About} />
          <Route exact path='/ticaretor'>
            <Ticaretor />
          </Route>
          <Route exact path="/ticaretor/buy-tickets">
            <BuyTickets />
          </Route>
          <Route exact path="/ticaretor/:moviename/movie-details" children={<MovieDetails />} />
          <Route exact path="/ticaretor/resale-ticket-form">
            <ResaleTicketForm />
          </Route>
          <Route exact path="/ticaretor/resale-ticket-form/fill-account-details">
            <AccountDetails />
          </Route>
          <Route exact path="/ticaretor/booked-tickets">
            <BookedTickets />
          </Route>
          <Route exact path="/ticaretor/tickets-history">
            <TicketsHistory />
          </Route>
          <Route exact path="/ticaretor/settings">
            <Settings />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

// render={props => (
// <Ticaretor {...props} />
// )}

export default App
