import React, { Component, PureComponent} from 'react';
import Winner from './Winner';
import Vote from './Vote';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
        }
        </p>
      </div>
    );
  }
}

export default App;
