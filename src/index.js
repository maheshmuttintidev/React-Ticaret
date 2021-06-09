import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import './index.css'
// import { getMoviesList } from './redux/actions/movies.actions'


// store.subscribe(() => console.log(store.getState()))

// store.dispatch(getMoviesList())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
