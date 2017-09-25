import React from 'react';

export default ({ data, onClickFunction }) => {
  return <div className="table-cell" onClick={ onClickFunction }>{ data }</div>;
};
