import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Weather from './containers/Weather/Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div><Weather /></div>;
  }
}

export default hot(module)(App);
