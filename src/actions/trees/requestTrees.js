import Axios from 'axios'
import { API_ROOT } from '../../paths'

export const REQUEST_TREE_TOTAL = 'REQUEST_TREE_TOTAL'
export const REQUEST_TREE_TOTAL_SUCCESS = 'REQUEST_TREE_TOTAL_SUCCESS'
export const REQUEST_TREE_TOTAL_FAILURE = 'REQUEST_TREE_TOTAL_FAILURE'
export const RECEIVE_TREE_TOTAL = 'RECEIVE_TREE_TOTAL'
export const REQUEST_TREES = 'REQUEST_TREES'
export const RECEIVE_TREES = 'RECEIVE_TREES'
export const REQUEST_TREES_SUCCESS = 'REQUEST_TREES_SUCCESS'
export const REQUEST_TREES_FAILURE = 'REQUEST_TREES_FAILURE'
export const INVALIDATE_TREE_PAGE = 'INVALIDATE_TREE_PAGE'

export function requestTreeTotal() {
  return { type: REQUEST_TREE_TOTAL }
}

export function receiveTreeTotal(json) {
  const treeTotal = json
  return { type: RECEIVE_TREE_TOTAL, treeTotal }
}

export function requestTreeTotalSuccess() {
  return { type: REQUEST_TREE_TOTAL_SUCCESS, status: 'success' }
}

export function requestTreeTotalFailure() {
  return { type: REQUEST_TREE_TOTAL_FAILURE, status: 'failure' }
}

export function requestTrees(startIndex) {
  return { type: REQUEST_TREES }
}

export function receiveTrees(data) {
  return {
    isFetching: false,
    type: RECEIVE_TREES,
    data: data,
    didInvalidate: false,
    receivedAt: Date.now()
  }
}

export function invalidateTreePage(page) {
  return { type: INVALIDATE_TREE_PAGE, page }
}


/*
Fetch total tree count
Ref: https://redux.js.org/advanced/async-actions
*/

export function fetchTreeTotal() {
  return function (dispatch) {
    dispatch(requestTreeTotal())
    return Axios.get(`${API_ROOT}/Trees/count`)
      .then(function (res) {
        return res.data.count
      }, function (error) {
        console.log('Ann error occured while fetching a tree count from the server', error)
      })
      .then(function (treeCount) {
        dispatch(receiveTreeTotal(treeCount))
      })
  }
}


/*
Fetch trees will be our model for api requests
Ref: https://redux.js.org/advanced/async-actions
*/

export function fetchTrees(currentPage, recordsPerPage) {
  return function (dispatch) {
    dispatch(requestTrees())
    return Axios.get(`${API_ROOT}/Trees?filter[limit]=${recordsPerPage}&filter[skip]=${currentPage * recordsPerPage}`)
      .then(function (res) {
        return res
      }, function (error) {
        console.log('Ann error occured while fetching trees from the server', error)
      })
      .then(function (json) {
        dispatch(receiveTrees(json.data))
      })
  }
}

export function requestTreesSuccess() {
  return { type: REQUEST_TREES_SUCCESS, status: 'success' }
}

export function requestTreesFailure() {
  return { type: REQUEST_TREES_FAILURE, status: 'failure' }
}

const shouldFetchTrees = function (state) {
  /*
   * We probably want to get paged trees with each load.
   * Though we probably want to cache pages during a given session
   */
  const trees = state.trees
  if (Object.keys(trees.byId).length === 0 && trees.byId.constructor === Object) {
    return true
  }
  if (trees.isFetching) {
    return false
  }
  return trees.didInvalidate
}

export function fetchTreesIfNeeded() {
  return function (dispatch, getState) {
    var state = getState()
    if (shouldFetchTrees(state)) {
      return dispatch(fetchTrees(state.trees.currentIndex, state.trees.recordsPerPage))
    }
  }
}
