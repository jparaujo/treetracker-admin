import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { configureStore, initialState } from './store'

const store = configureStore(initialState)
// import injectTapEventPlugin from "react-tap-event-plugin";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
