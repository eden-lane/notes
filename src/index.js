import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { App } from './containers/app'
import rootReducer from './reducers'
import { fetchCollections } from './actions/collections'
import { backendless, auth } from './config.js'

const app = document.createElement('div')
document.body.appendChild(app)

Backendless.serverURL = backendless.serverURL;
Backendless.initApp(backendless.APPLICATION_ID, backendless.API_KEY);


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        )
    )
)

store.dispatch(fetchCollections())

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
    , app)

module.hot.accept()
