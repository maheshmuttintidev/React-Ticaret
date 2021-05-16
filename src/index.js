import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import ReduxPromise from 'redux-promise'
import App from './App'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(allReducers)}>
      <App />
    </Provider>,
    document.getElementById('root')
)
