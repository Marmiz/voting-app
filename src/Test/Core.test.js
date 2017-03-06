/*jshint esversion: 6 */
/*
* Test if the application correctly load in a set of entries
*/
import {List, Map} from 'immutable';
import {setEntries, next, vote} from '../core'; //takes a previous state and include them.

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

  /* check if for every voete there's a tally */
  describe('vote', () =>{

    it('creates a tally for the vote entry', () =>{
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List()
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).toEqual(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting' : 1
          })
        }),
        entries: List()
      }));
    });

    it('add to the existing tally for the voted entry', () =>{
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', 'La-La-Land'),
          tally: Map({
            'Trainspotting': 3,
            'La-La-Land': 2
          })
        }),
        entries: List()
      });
      const nextState = vote(state, 'La-La-Land');
      expect(nextState).toEqual(Map({
        vote: Map({
          pair: List.of('Trainspotting', 'La-La-Land'),
          tally: Map({
            'Trainspotting': 3,
            'La-La-Land': 3
          })
        }),
        entries: List()
      }));
    });

  });
  // vote

});
