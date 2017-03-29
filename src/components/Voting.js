/*jshint esversion: 6 */
import React, {PureComponent} from 'react';
import Winner from './Winner';
import Vote from './Vote';
import logo from '../logo.svg';
import {Link} from 'react-router';



class Voting extends PureComponent {
  render() {
    return(
      <div>
      <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />
      }
      </div>
      <div>
      <Link to="/results">Results</Link>
      </div>
      </div>
    )
  }
}

export default Voting;
