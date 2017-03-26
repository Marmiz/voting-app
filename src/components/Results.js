import React, {PureComponent} from 'react';
import {List, Map} from 'immutable';
import Winner from './Winner';
import {connect} from 'react-redux';


class Results extends PureComponent {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     pair: List.of('Trainspotting', '28 Days Later'),
  //     tally: Map({'Trainspotting': 5, '28 Days Later': 4}),
  //     // winner: 'Ciccio'
  //   };
  // }
  getVotes(entry){
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  // getPair(){
  //   return ['Trainspotting', 'Nemo']
  // }
  render(){
    return (
      // this.state.winner ?
      // <Winner ref="winner" winner={this.state.winner} /> :
      <div className="results">
      <div className="tally">
       {this.props.pair.map(entry =>
         <div key={entry} className="entry">
          <h1>{entry}</h1>
            <div className="VoteCount">
              {this.getVotes(entry)}
            </div>
          </div>
       )}
       </div>
       <div className="management">
        <button ref="next"
          className="next"
          onClick={this.props.next}>
          Next
        </button>
      </div>
      </div>
    )
  }
}

export default Results;

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps)(Results);
