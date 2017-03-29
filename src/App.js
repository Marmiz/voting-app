import React, {PureComponent} from 'react';
import Voting from './components/Voting';
import {List, Map} from 'immutable';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actionCreators from './utils/actions-creator';


class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     pair: ['Trainspotting', 'Nemo'],
  //     hasVoted: 'Trainspotting',
  //   };
  // }

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
          <Link to="/results">Results</Link>
        </p>
      </div>
    );
  }
}

export default App;

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
