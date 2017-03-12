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

    /* The winning entry from the current vote should be kept,
    and added back to the end of the entries, so that it will later be paired with something else.
    The losing entry is thrown away. If there is a tie, both entries are kept. */
    it('puts winner of current vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Gladiator', 'Blade Runner'),
          tally: Map({
            'Gladiator': 4,
            'Blade Runner': 2
          })
        }),
        entries: List.of('Sunshine', 'Millions', 'Hangover')
      });
      const nextState = next(state);
      expect(nextState).toEqual(Map({
        vote: Map({
          pair: List.of('Sunshine', 'Millions')
        }),
        entries: List.of('Hangover', 'Gladiator')
      }).toJS());
    });

    it('puts both tied back into entries', () =>{
      const state = Map({
        vote: Map({
          pair: List.of('Avengers', 'X-Men'),
          tally: Map({
            'Avengers': 1,
            'X-Men': 1
          })
        }),
        entries: List.of('Deadpool', 'Suicide Squad', 'Dr Strange')
      });
      const nextState = next(state);
      expect(nextState).toEqual(Map({
        vote: Map({
          pair: List.of('Deadpool', 'Suicide Squad')
        }),
        entries: List.of('Dr Strange', 'Avengers', 'X-Men')
      }).toJS());
    });

    /* if only one vote remains declare a winner */
    it('marks the winner when there is only one entry', () =>{
      const state= Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        }),
        entries: List()
      });
      const nextState = next(state);
      expect(nextState).toEqual(Map({
        winner: 'Trainspotting'
      }))
    });

  });

  /* check if for every voete there's a tally */
  describe('vote', () =>{

    it('creates a tally for the vote entry', () =>{
      const state = Map({
        pair: List.of('Trainspotting', '28 Days Later')
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).toEqual(Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 1
        })
      }));
    });

    it('add to the existing tally for the voted entry', () =>{
      const state = Map({
          pair: List.of('Trainspotting', 'La-La-Land'),
          tally: Map({
            'Trainspotting': 3,
            'La-La-Land': 2
          })
      });
      const nextState = vote(state, 'La-La-Land');
      expect(nextState).toEqual(Map({
          pair: List.of('Trainspotting', 'La-La-Land'),
          tally: Map({
            'Trainspotting': 3,
            'La-La-Land': 3
          })
      }));
    });

  });
  // vote

});
