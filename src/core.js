/*jshint esversion: 6 */
/*
* setEntries can just set an entries key in the state Map
* and set the value as the given List of entries.
*/
import {List, Map, fromJS} from 'immutable';

//in case reducers are called with undefined state
export const INITIAL_STATE = Map();

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

// concatenate the "winners" of the current vote to the entries
function getWinners(vote) {
  if (!vote) return [];
  const [a, b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if      (aVotes > bVotes)  return [a];
  else if (aVotes < bVotes)  return [b];
  else                       return [a, b];
}

export function next(state){
  const entries = state.get('entries')
          .concat(getWinners(state.get('vote')));
  if(entries.size == 1){  //set the winner
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  }else{
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    }).toJS();
  }
}

export function vote(voteState, entry) {
  return voteState.updateIn(
    ['tally', entry],
    0,
    tally => tally + 1
  );
}
