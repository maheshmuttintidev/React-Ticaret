import {useHistory} from 'react-router'
import Home from './components/home/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './containers/Login'
import Location from './components/home/location'
import NotFound from './components/errorPage'
import Register from './containers/Register'
import ForgotPasswordModel from './containers/ForgotPasswordModel'
// import { ProtectedRoute } from './routes/protected.route'
import Ticaretor from './components/protectedPages/ticaretorPage/ticaretor'
import { ProtectedRoute } from './routes/protected.route'

function App() {
  const isUserLoggedIn = JSON.parse(sessionStorage.getItem("userData"))?.token ? true : false
  const userId = JSON.parse(sessionStorage.getItem("userData"))?.userId
  const history = useHistory()
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" render={props => (
            <Home {...props} isUserLoggedIn={isUserLoggedIn} userId={userId} />
          )} />
          <Route exact path="/login" render={props => (
            <Login {...props} isUserLoggedIn={isUserLoggedIn} userId={userId} />
          )} />
          <Route exact path="/register" render={props => (
            <Register {...props} isUserLoggedIn={isUserLoggedIn} userId={userId} />
          )} />
          <Route exact path="/forgot-password" render={props => (
            <ForgotPasswordModel {...props} isUserLoggedIn={isUserLoggedIn} userId={userId} />
          )} />
          <Route exact path="/location" component={Location} />
          <ProtectedRoute path={`/ticaretor/${userId}`}>
            <Ticaretor history={history}/>
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
