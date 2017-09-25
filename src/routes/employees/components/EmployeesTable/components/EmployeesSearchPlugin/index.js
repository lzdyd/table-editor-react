import React from 'react';

export default ({ data, field, update }) => {
  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter((item) => {
      return item[field].toLowerCase().includes(value);
    });

    update({
      data: filter
    });
  };

  return (
    <input
      type="text"
      onChange={ dataSearch }
    />
  );
};
