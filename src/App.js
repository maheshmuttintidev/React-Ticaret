import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './containers/Login'
import Location from './components/Location'
function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/location" component={Location}/>
        </Switch>
      </Router> 
    </>
  )
}

export default App
