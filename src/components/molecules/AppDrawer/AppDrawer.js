import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconButton from '@material-ui/core/IconButton'

import { ImageSearch, Nature } from 'mdi-material-ui'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { drawerWidth } from '../../../common/variables'

const styles = theme => ({
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    top: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  }
});

const navItems = [
    {
      label: 'Trees',
      icon: 'Nature',
      id: 'trees'
    },
    {
      label: 'Images',
      icon: 'ImageSearch',
      id: 'imageScrubber'
    }
]

class AppDrawer extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // this is where we may check in for logged in state and dispatch async calls for doing so
  }


  render() {
    const { isOpen, changeCurrentView, closeAppDrawer, currentView, classes, theme } = this.props
    console.log("| Appdrawer | render | currentView  » |", currentView )
    return(
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !isOpen && classes.drawerPaperClose),
        }}
        open={isOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={closeAppDrawer()}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {navItems.map(item => {
            return (
              <ListItem key={item.id} button onClick={
                function(e) {
                  console.log('navItemClicked »»', item)
                  changeCurrentView(item.id)
                }
              }>
                {isOpen && <ListItemText primary={item.label} />}
                <ListItemIcon>
                {/* gotta make the icons dynamic, probably by creating a NavIcon component */}
                  <Nature />
                </ListItemIcon>
              </ListItem>
            )})
          }
        </List>
      </Drawer>
    )
  }
}


const mapState = (state) => {
  return {
    isOpen: state.appFrame.appDrawer.isOpen,
    currentView: state.appFrame.currentView
  }
}

const mapDispatch = (dispatch) => {
  return {
    closeAppDrawer: () => dispatch.appFrame.closeAppDrawer,
    toggleAppDrawer: () => dispatch.appFrame.toggleAppDrawer,
    changeCurrentView: (newView) => dispatch.appFrame.changeCurrentView({ newView: newView})
  }
}

AppDrawer.propTypes = {}

export default compose(
  withStyles(styles, { withTheme: true, name: 'AppDrawer' }),
  connect(mapState, mapDispatch)
)(AppDrawer)
