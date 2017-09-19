import React, { Component } from 'react';
import GetAllEmployees from '../../services/api/employees/GetAllEmployees';

import EmployeesTableHeaders from './components/employeesTableHeaders/index';
import EmployeesTableRow from './components/employeesTableRow/index';

import './style.scss';

export default class EmployeesTable extends Component {
  constructor(props) {
    super(props);

    this.state = { employees: '' };

    this.getJSONData = this.getJSONData.bind(this);
    this.tranformJSONData = this.tranformJSONData.bind(this);
  }

  getJSONData() {
    // new GetAllEmployees('http://localhost:8080/test/employees')
    new GetAllEmployees('./data.json')
      .then(response => this.tranformJSONData(JSON.parse(response)))
      .catch(err => console.log(err));
  }

  tranformJSONData(JSON) {
    const employeesTableData = {
      tableHeaders: Object.keys(JSON[0]),
      tableRows: JSON
    };

    this.setState({ employees: employeesTableData });
  }

  componentDidMount() {
    this.getJSONData();
  }

  render() {
    return (
      <div className="table employeesTable">
        {
          this.state.employees.tableHeaders ?
            <EmployeesTableHeaders tableHeader={ this.state.employees.tableHeaders } /> : null
        }

        {
          this.state.employees.tableRows ?
            this.state.employees.tableRows.map((item) => {
              const itemValues = Object.values(item);
              return (
                <div className="table-row table-row-data" key={ item.id }>
                  {
                    itemValues.map((currentItem, i) => {
                      return <EmployeesTableRow tableCellData={ currentItem } key={ i } />;
                    })
                  }
                </div>
              );
            }) : null
        }
      </div>
    );
  }
}
