import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TableToolbar from '../../molecules/TableToolbar/TableToolbar'
import TreeTable from '../TreeTable/TreeTable'
/* @Todo: move to some configurationn file */
const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'auto',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
    top: 0,
    left: 0,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolBar: {
    backgroundColor: '#222'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    top: 0,
    left: 0,
    // position: 'relative',
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
  },
  toolbar: {
    top: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: '80px',
    paddingLeft: '80px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
  // 'MuiTablePagination-root-120': {
  //   position: 'fixed',
  //   bottom: 0,
  //   left: 0
  // }
});

const AppFrame = (props) => ({

  render() {
    const { classes, theme, toggleAppDrawer, closeAppDrawer, state } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, state.appFrame.drawer.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!state.appFrame.drawer.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleAppDrawer()}
              className={classNames(classes.menuButton, state.appFrame.drawer.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              TreeTracker Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !state.appFrame.drawer.open && classes.drawerPaperClose),
          }}
          open={state.appFrame.drawer.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={closeAppDrawer()}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
        </Drawer>
        <main className={classes.content}>
          <TableToolbar />
          <TreeTable />
        </main>
      </div>
    );
  }
})

const mapState = state => {
  return { state: state }
}

const mapDispatch = dispatch => {
  return {
    closeAppDrawer: () => dispatch.appFrame.closeAppDrawer,
    toggleAppDrawer: () => dispatch.appFrame.toggleAppDrawer,
  }
}

AppFrame.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default compose(
  withStyles(styles, { withTheme: true, name: 'AppFrame' }),
  connect(mapState, mapDispatch)
)(AppFrame)
