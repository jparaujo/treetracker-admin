import { REQUEST_TREES, RECEIVE_TREES, REQUEST_TREE_TOTAL, RECEIVE_TREE_TOTAL } from '../actions/trees/requestTrees'
// import { REMOVE_TREE } from '../actions/trees/removeTree'
import { SHOW_TREE } from '../actions/trees/showTree'

export function trees (state = {}, action) {
  switch(action.type) {
    case REQUEST_TREE_TOTAL:
      // probably wannt to set some kind of isFetchig here
      return Object.assign({}, state, {})
    case RECEIVE_TREE_TOTAL:
      return Object.assign({}, state, {
        treeTotal: action.treeTotal
      })
    case REQUEST_TREES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_TREES:
      const byId = {}
      const allIds = []
      Object.entries(action.data).forEach(function(item) {
        console.log(item)
        const obj = item[1]
        byId[obj.id] = item[1]
        allIds.push(obj.id)
      })
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        didInvalidate: action.didInvalidate,
        byId: byId,
        allIds: allIds,
        lastUpdated: action.receivedAt
      })
    case SHOW_TREE:
      return Object.assign({}, state, {
        showing: action.filter
      })
    default:
      return state
  }
}
