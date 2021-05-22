import {useHistory} from 'react-router'
import Home from './components/home/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './containers/Login'
import Location from './components/home/location'
import NotFound from './components/errorPage'
import Register from './containers/Register'
import ForgotPasswordModel from './containers/ForgotPasswordModel'
import Ticaretor from './components/protectedPages/ticaretorPage/ticaretor'
import { ProtectedRoute } from './routes/protected.route'
import About from './components/aboutusPage/about'
import ResaleTicketForm from './components/protectedPages/sellYourTicketPages/resaleTicketForm'
import AccountDetails from './components/protectedPages/sellYourTicketPages/accountDetails'

function App() {
  const history = useHistory()
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
          <ProtectedRoute exact path='/ticaretor'>
            <Ticaretor history={history} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ticaretor/resale-ticket-form">
              <ResaleTicketForm />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ticaretor/resale-ticket-form/fill-account-details">
              <AccountDetails />
          </ProtectedRoute>
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
