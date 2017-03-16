import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getPair(){
    return this.props.pair || [];
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        {this.getPair().map(entry =>
          <button key={entry}>
          <h1>{entry}</h1>
          </button>
        )}
        </p>
      </div>
    );
  }
}

export default App;
