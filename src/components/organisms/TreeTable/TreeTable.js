import 'react-select/dist/react-select.css'

import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class TreeTable extends Component {
  render() {
    // console.log(this.props)
    const defaultPageSize = this.props.trees.recordsPerPage
    const pages = this.props.trees.treeTotal / defaultPageSize
    const loading = this.props.trees.isFetching
    return (
      <ReactTable
        columns={[
          {
            Header: 'Id',
            accessor: 'id'
          },
          {
            Header: 'Active',
            accessor: 'active'
          },
          {
            Header: 'Age',
            accessor: 'age'
          }
        ]}
        manual // Forces table not to paginate or sort automatically, so we can handle it server-side
        data={this.props.data}
        pages={pages} // Display the total number of pages
        loading={loading} // Display the loading overlay when we need it
        filterable
        defaultPageSize={10}
        className='-striped -highlight'
        />    );
  }
}

export default TreeTable
