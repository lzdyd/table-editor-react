import React from 'react';

import EmpployeesTableCell from '../EmployeesTableCell/index';

export default ({ data, onClickFunction }) => {
  const tableData = data.map((item) => {
    const itemValues = Object.values(item);
    return (
      <h1>123123</h1>
    );
  });

  console.log(tableData)

  return tableData;
};

