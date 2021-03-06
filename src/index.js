import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { App } from './containers/app'
import { API } from './services/api.js';
import rootReducer from './reducers'
import { fetchNodes, openCollection } from './actions/collections'
import { backendless, auth } from './config.js'

API.init(backendless);

const app = document.createElement('div')
document.body.appendChild(app)


let user = Backendless.UserService.loginSync(auth.login, auth.password)

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
)

store.dispatch(fetchNodes())
// store.dispatch(openCollection('D153CCC4-6474-E040-FFBF-435FAB964700'))

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
    , app)

module.hot.accept()
