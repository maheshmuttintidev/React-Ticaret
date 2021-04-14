import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import allReducers from './reducers'
import {BrowserRouter as Router} from 'react-router-dom'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(allReducers)}>
    <Router forceRefresh={true}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
