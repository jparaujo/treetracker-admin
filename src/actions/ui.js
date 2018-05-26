export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BADGED: 'SHOW_BADGED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const setVisibilityFilter = function(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
