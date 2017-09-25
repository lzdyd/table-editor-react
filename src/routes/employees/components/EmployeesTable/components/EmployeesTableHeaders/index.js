import React from 'react';

import EmployeesSearchPlugin from '../EmployeesSearchPlugin/index';
import Test from '../test/index';

export default ({ data, update, filter }) => {
  let tableHeaders = Object.create(Object.keys(data[0]));

  tableHeaders = tableHeaders.map((item, i) => {
    return (
      <div className="table-cell table-cell-headers" key={ i }>
        {item}
        <br />
        {/*        <EmployeesSearchPlugin
         data={ data }
          update={ update }
          field={ item }
        />*/}
        <Test data={ data } filter={ filter } />
      </div>
    );
  });

  return (
    <div className="table-row table-row-headers">
      { tableHeaders }
    </div>
  );
};
