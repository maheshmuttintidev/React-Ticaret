import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)

export default store