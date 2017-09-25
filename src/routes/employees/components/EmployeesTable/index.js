import React, { Component } from 'react';

import GetAllEmployees from 'api/employees/GetAllEmployees';

import EmployeesTableCell from './components/EmployeesTableCell/index';
import EmployeesTableHeaders from './components/EmployeesTableHeaders/index';
import EmployeesTableData from './components/EmployeesTableData/index';

import './style.scss';

export default class EmployeesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      filteredData: '',
      term: {}
    };

    this.getJSONData = this.getJSONData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.onTableCellClick = this.onTableCellClick.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  getJSONData() {
    // new GetAllEmployees('http://localhost:8080/test/employees')
    new GetAllEmployees('./data.json')
      .then((response) => {
        this.initialData = JSON.parse(response);
        this.setState({ data: this.initialData });
      })
      .catch(err => console.log(err));
  }

  updateData(config) {
    this.setState(config);
  }

  componentDidMount() {
    this.getJSONData();
  }

  onTableCellClick(e) {
    this.props.onChangeActiveRow(e.target.parentNode.getAttribute('data-key'));
  }

  filterList(text) {
    const filteredList = this.state.data.filter((item) => {
      return item[name].toLowerCase().search(text.toLowerCase()) !== -1;
    });
    this.setState({ data: filteredList });
  }

  render() {
    if (!this.state.data) return <p>Loading...</p>;

    let tableData = this.state.data;
    tableData = tableData.map((item) => {
      const itemValues = Object.values(item);
      return (
        <div
          className={`table-row${((item.id === this.props.activeRow) ? ' selected' : '')}`}
          key={ item.id }
          data-key={ item.id }>
          {
            itemValues.map((cellData, key) => {
              return (
                <EmployeesTableCell
                  data={ cellData }
                  key={ key }
                  onClickFunction={ this.onTableCellClick }/>
              );
            })
          }
        </div>
      );
    });

    return (
      <div className="table employees-table">
        <EmployeesTableHeaders
          data={ this.initialData }
          update={ this.updateData }
          filter={ this.filterList }
        />
        {/*<EmployeesTableData data={ this.state.data } onClickFunction={ this.onTableCellClick }/>*/}
        { tableData }
      </div>
    );
  }
}
