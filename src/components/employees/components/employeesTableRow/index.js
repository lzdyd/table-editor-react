import React, { Component } from 'react';

import './style.scss';

export default class EmployeesTableRow extends Component {
  render() {
    return <div className="table-cell">{ this.props.tableCellData }</div>;
  }
}
