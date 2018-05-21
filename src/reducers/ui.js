
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/ui'

const { SHOW_ALL } = VisibilityFilters


export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
