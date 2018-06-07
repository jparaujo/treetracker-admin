import { dispatch } from '@rematch/core'

const appFrame = {
  state: {
    drawer: {
      'open': false
    }
  },
  reducers: {
    toggleAppDrawer(state) {
      return { drawer: { open: !state.open }}
    },
    openAppDrawer(state) {
      return { drawer: { open: true }}
    },
    closeAppDrawer(state) {
      return { drawer: { open: false }}
    }
  }
}

export default appFrame
