import Home from './components/home/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './containers/Login'
import Location from './components/home/location'
import NotFound from './components/errorPage'
import Register from './containers/Register'
function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/location" component={Location}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router> 
    </>
  )
}

export default App
