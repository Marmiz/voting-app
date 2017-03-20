import React, {PureComponent} from 'react';
import Voting from './components/Voting';
import {List} from 'immutable';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {pair: ['Trainspotting', 'Nemo'], hasVoted: 'Trainspotting'};
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Voting pair={this.state.pair} hasVoted={this.state.hasVoted}/>
        </p>
        <p>
          <Link to="/test">Test</Link>
        </p>
      </div>
    );
  }
}

export default App;
