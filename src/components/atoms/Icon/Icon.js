import React from 'react'
import { iconPaths } from '../../../common/iconPaths'
import IconButton from '@material-ui/core/IconButton'

const Icon = (props) => ({

  render() {
    return (
      <IconButton
        color="inherit"
        aria-label="props.aria-label"
      >
        <svg width="36" height="36" viewBox="0 0 24 24">
          <path d={iconPaths[props.icon]}></path>
        </svg>
      </IconButton>
    )
  }
})

export default Icon
