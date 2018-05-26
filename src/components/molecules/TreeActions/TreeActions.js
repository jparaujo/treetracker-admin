import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TreeActions extends Component {
  render() {
    const id = this.props.id
    return (
      <Link to={`/settings/${id}`}>
        Settings
      </Link>
    );
  }
}

export default TreeActions
