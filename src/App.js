import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import dateFormat from 'dateformat';
class App extends Component {

  constructor(props) {
    super(props);
    this.onChangeRowsPerPage = this.onChangeRowsPerPage.bind(this);
  }

  componentDidMount() {
    this.props.getTreesAsync({ page: this.props.page, rowsPerPage: this.props.rowsPerPage });
  }

  render() {
    return (
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Creation</TableCell>
              <TableCell>Last update</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.treesArray.map(tree => {
              return (
                <TableRow key={tree.id}>
                  <TableCell>{tree.id}</TableCell>
                  <TableCell>{dateFormat(tree.timeCreated, 'mmm dd, yyyy h:MM TT')}</TableCell>
                  <TableCell>{dateFormat(tree.timeUpdated, 'mmm dd, yyyy h:MM TT')}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={200}
          rowsPerPage={this.props.rowsPerPage}
          page={this.props.page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.onPageChange}
          onChangeRowsPerPage={this.onChangeRowsPerPage}
        />
      </Paper>
    )
  }
  onPageChange = (event, page) => {
    this.props.getTreesAsync({ page: page, rowsPerPage: this.props.rowsPerPage });
  }
  onChangeRowsPerPage = event => {
    this.props.getTreesAsync({ page: this.props.page, rowsPerPage: event.target.value });
  }
}



const mapState = state => {
  const keys = Object.keys(state.trees.data);
  return {
    treesArray: keys.map(id => ({
      ...state.trees.data[id]
    })),
    page: state.trees.page,
    rowsPerPage: state.trees.rowsPerPage
  }
}

const mapDispatch = (dispatch) => ({
  getTreesAsync: ({ page, rowsPerPage }) => dispatch.trees.getTreesAsync({ page: page, rowsPerPage: rowsPerPage })
})

export default connect(mapState, mapDispatch)(App);
