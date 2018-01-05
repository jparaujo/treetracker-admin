import React, { Component } from 'react';
import Record from '../Record/Record';
import { Table } from 'reactstrap';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderRecords() {
    return this.props.records.map((record) => {
      return (
        <Record key={record.id} record={record} />
      )
    });
  }

  render() {
    return (
      <div className="dashboard">
        <Table>
          <thead>
            <tr>
              <th>Created On</th>
              <th>Updated On</th>
              <th>Location</th>
              <th>Dead</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRecords()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Dashboard;
