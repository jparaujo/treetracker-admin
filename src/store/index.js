import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
// import { VisibilityFilters } from '../actions/ui'
import rootReducer from '../reducers/index'

export const configureStore = function(preloadedState) {
  /*
    when were ready to populate the initial state from user data it should be
    passed in via app.js as part of some set of initialization reducers.
  */
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
}

export const initialState = {
  // visibilityFilter: VisibilityFilters.SHOW_ALL,
  users: {
      // gotta populate this for later
  },
  trees: {
    treeTotal: 0,
    isFetching: true,
    didInvalidate: false,
    showing: null, // which tree are we showing if any
    fetchedPageCount: 0,
    currentIndex: 0,
    currentPage: 0,
    recordsPerPage: 10,
    nextPageUrl: '#next',
    prevPageUrl: '#prev',
    byId: {
    }, // { id: { id: id, … }, … }
    allIds: [],
    itemsByPage: {} // list of ids referencing items, let's cache by session but not store pages.
  }
}
