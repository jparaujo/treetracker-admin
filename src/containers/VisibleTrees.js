import { connect } from 'react-redux'
import TreeTable from '../components/organisms/TreeTable/TreeTable'

const mapStateToProps = function(state) {
  const asArray = []
  state.trees.allIds.forEach(function(item) {
    asArray.push( state.trees.byId[item])
  })
  return {
    trees: state.trees,
    data: asArray,
    loading: state.trees.isFetching 
  }
}

const VisibleTrees = connect(
  mapStateToProps
//  mapDispatchToProps
)(TreeTable)

export default VisibleTrees
