/*
* setEntries can just set an entries key in the state Map
* and set the value as the given List of entries.
*/
import {List} from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}
