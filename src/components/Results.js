import React, {PureComponent} from 'react';
import {List, Map} from 'immutable';
import Winner from './Winner';


class Test extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pair: List.of('Trainspotting', '28 Days Later'),
      tally: Map({'Trainspotting': 5, '28 Days Later': 4}),
      // winner: 'Ciccio'
    };
  }
  getVotes(entry){
    if (this.state.tally && this.state.tally.has(entry)) {
      return this.state.tally.get(entry);
    }
    return 0;
  }
  // getPair(){
  //   return ['Trainspotting', 'Nemo']
  // }
  render(){
    return (
      this.state.winner ?
      <Winner ref="winner" winner={this.state.winner} /> :
      <div className="results">
      <div className="tally">
       {this.state.pair.map(entry =>
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

export default Test;
