/*
PictureScrubber

A handy tool for quickly flagging bad images

*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PictureScrubber = (props) => ({

  render() {
    return (
      <h1>PictureScrubber!</h1>
    )
  }
})

const mapState = (state) => {
  return { state: state }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

PictureScrubber.propTypes = {
}

export default connect(mapState, mapDispatch)(PictureScrubber)
