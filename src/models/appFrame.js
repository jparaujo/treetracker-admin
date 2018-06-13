import { dispatch } from '@rematch/core'

const appFrame = {
  state: {
    currentView: 'trees',
    appDrawer: {
      'isOpen': false
    }
  },
  reducers: {
    toggleAppDrawer(state) {
      return { currentView: state.currentView, appDrawer: { isOpen: !state.isOpen }}
    },
    openAppDrawer(state) {
      return { currentView: state.currentView, appDrawer: { isOpen: true }}
    },
    closeAppDrawer(state) {
      return { currentView: state.currentView, appDrawer: { isOpen: false }}
    },
    changeCurrentView(payload, state) {
      console.log('| reduceer | changeCurrentView | » ', payload.currentView, state)
      return { currentView: payload.currentView, appDrawer: { isOpen: state.isOpen } }
    }
  }
}

export default appFrame
