import React, { Component } from 'react';

import EmployeesControlPanel from './components/EmployeesControlPanel/index';
import EmployeesTable from './components/EmployeesTable/index';

import './style.scss';

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRow: null
    };

    this.onMainClick = this.onMainClick.bind(this);
    this.onChangeActiveRow = this.onChangeActiveRow.bind(this);
    this.onMainClick = this.onMainClick.bind(this);
  }

  onMainClick(e) {
    if (this.state.activeRow && !e.target.classList.contains('table-cell')) {
      this.setState({ activeRow: null });
    }
  }

  onChangeActiveRow(id) {
    this.setState({ activeRow: id });
  }

  render() {
    return (
      <div className="employees-main" onClick={ this.onMainClick }>
        <EmployeesControlPanel />
        <EmployeesTable onChangeActiveRow={ this.onChangeActiveRow } activeRow={ this.state.activeRow }/>
      </div>
    );
  }
}
