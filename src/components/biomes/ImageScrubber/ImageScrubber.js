/*
PictureScrubber

A handy tool for quickly flagging bad images

*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ImageScrubber = (props) => ({

  render() {
    return (
      <h1>Image Scrubber Will Live Here!!</h1>
    )
  }
})

const mapState = (state) => {
  return { state: state }
}

const mapDispatch = (dispatch) => {
  return {}
}

ImageScrubber.propTypes = {
}

export default connect(mapState, mapDispatch)(ImageScrubber)
