import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers/app'

const app = document.createElement('div')
document.body.appendChild(app)

ReactDOM.render(
    <div>
        <App />
    </div>
    , app)

module.hot.accept()
