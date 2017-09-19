import React, { Component } from 'react';

import Employees from './components/employees/index';

import './common/style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Main App</h1>
        <Employees />
      </div>
    );
  }
}
