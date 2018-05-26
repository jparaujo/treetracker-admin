import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
 * Actions
 */

import { fetchTreesIfNeeded, fetchTreeTotal } from '../actions/trees/requestTrees'

/*
 * Containers
 */

import VisibleTrees from '../containers/VisibleTrees'

class App extends Component {

  componentDidMount() {
    console.log('2')
    // in the future we want to maybe restore the users last filter set from the server
    this.props.dispatch(fetchTreeTotal())
    this.props.dispatch(fetchTreesIfNeeded(this.props.trees.currentIndex, this.props.trees.recordsPerPage))
  }

  render() {
    console.log('!')
    return(
      <VisibleTrees/>
    )
  }
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(App)
