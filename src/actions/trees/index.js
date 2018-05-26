export const REMOVE_TREE = 'REMOVE_TREE'

export const ASSIGN_TREE = 'ASSIGN_TREE'

/*
 * action creators
 */


export function removeTree (treeId) {
  return { type: REMOVE_TREE, treeId }
}

export function assignTree (treeId, collectionId) {
  return { type: ASSIGN_TREE, treeId, collectionId }
}
