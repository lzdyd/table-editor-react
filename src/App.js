import React, { Component } from 'react';

import Employees from './routes/employees/index';

import './common/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className="main-app">
        <h1>Main App</h1>
        <Employees />
      </div>
    );
  }
}
