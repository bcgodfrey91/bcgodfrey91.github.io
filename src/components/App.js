import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header'
import Footer from './Footer'
import { browserHistory } from 'react-router';


class App extends Component {

  componentDidMount() {
    browserHistory.push('/about')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
