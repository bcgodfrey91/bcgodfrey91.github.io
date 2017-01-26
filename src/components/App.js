import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import { browserHistory } from 'react-router';


class App extends Component {

  componentDidMount() {
    browserHistory.push('/projects')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
