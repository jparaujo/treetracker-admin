import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'typeface-roboto'
import { init } from "@rematch/core";
import * as models from "./models"
import './index.css'

const store = init({models})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
