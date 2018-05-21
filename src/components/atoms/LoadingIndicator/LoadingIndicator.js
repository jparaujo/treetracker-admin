import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class LoadingIndicator extends Component {

  render() {
    return (
      <FontAwesomeIcon icon="circle-notch" spin pulse />
    )
  }
}

export default LoadingIndicator
