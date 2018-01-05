import React, { Component } from 'react';
import moment from 'moment';

class Record extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  editRecord(event) {
    event.preventDefault();
  }

  deleteRecord(event) {
    event.preventDefault();
  }

  render() {
    return (
      <tr>
        <td>{(this.props.record.time_created === null) ? 'None' : moment(this.props.record.time_created).format('YYYY-MM-DD hh:mm a')}</td>
        <td>{(this.props.record.time_updated === null) ? 'None' : moment(this.props.record.time_updated).format('YYYY-MM-DD hh:mm a')}</td>
        <td>{this.props.record.lon}, {this.props.record.lat}</td>
        <td>{this.props.record.dead}</td>
        <td>
          Actions
        </td>
      </tr>
    )
  }
}

export default Record;
