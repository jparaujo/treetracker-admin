import { dispatch } from '@rematch/core'

const appFrame = {
  state: {
    appDrawer: {
      'open': false
    },
    displayDrawer: {
      'open': false 
    }
  },
  reducers: {
    toggleAppDrawer(state) {
      return { appDrawer: { open: !state.open }}
    },
    openAppDrawer(state) {
      return { appDrawer: { open: true }}
    },
    closeAppDrawer(state) {
      return { appDrawer: { open: false }}
    },
    toggleDisplayDrawer(state) {
      return { displayDrawer: { open: !state.open }}
    },
    openDisplayDrawer(state) {
      return { displayDrawer: { open: true }}
    },
    closeDisplayDrawer(state) {
      return { displayDrawer: { open: false }}
    }
  }
}

export default appFrame
