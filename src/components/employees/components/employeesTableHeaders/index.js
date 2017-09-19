import React, { Component } from 'react';

import './style.scss';

export default class EmployeesTableHeaders extends Component {
  render() {
    const tableHeaders = this.props.tableHeader.map((item, i) => {
      return <div className="table-cell table-cell-headers" key={ i } data-field={ item }>{ item }</div>;
    });

    return (
      <div className="table-row table-row-headers">
        { tableHeaders }
      </div>
    );
  }
}