import { API_ROOT } from '../paths.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
 * Components
 */
import AppFrame from '../components/organisms/AppFrame/AppFrame'

class App extends Component {

  componentDidMount() {
    // in the future we want to maybe restore the users last filter set from the server
    async function initializeApp() {
      const response = await fetch(`${API_ROOT}/Trees/count`)
      const data = await response.json()
      console.log(data)
    }
    initializeApp()
  }

  render() {
    return(
      <AppFrame />
    )
  }
}

const mapState = state => {
  return state
}

const mapDispatch = dispatch => ({
  requestTreeCount: id => dispatch.trees.requestTreeCount(),
  requestTrees: id => dispatch.trees.requestTrees()
})
export default connect(mapState, mapDispatch)(App)
