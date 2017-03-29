import React, {PureComponent} from 'react';
import {List, Map} from 'immutable';
import Winner from './Winner';
import Tally from './Tally';
import {connect} from 'react-redux';
import * as actionCreators from '../utils/actions-creator';
import {Link} from 'react-router';



class Results extends PureComponent {

  getVotes(entry){
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  getPair() {
  return this.props.pair || [];
  }

  render(){
    return (
      this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="results">
      <Tally pair={this.props.pair} tally={this.props.tally} />
       <div className="management">
       <Link to="/">
        <button ref="next"
          className="next"
          onClick={this.props.next}>
          Next
        </button>
        </Link>
      </div>
      </div>
    )
  }
}

// export default Results;


function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
