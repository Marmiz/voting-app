/*jshint esversion: 6 */
/*
* Test if the application correctly load in a set of entries
*/
import {List, Map} from 'immutable';
import {setEntries, next} from '../core'; //takes a previous state and include them.

describe('app logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      expect(nextState).toEqual(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      expect(nextState).toEqual(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
  });

  /* The two first entries are included under the key pair.
  The entries under vote should no longer be in the entries List */
  describe('next', () =>{

    it('take the next two entries under vote', () =>{
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });
      const nextState = next(state);
      expect(nextState).toEqual(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
      }).toJS());
    });

  });

});
