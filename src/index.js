import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './containers/app'
import rootReducer from './reducers'

const app = document.createElement('div')
document.body.appendChild(app)

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
    , app)

module.hot.accept()
