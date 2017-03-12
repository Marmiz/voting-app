/*jshint esversion: 6 */
import {Map, fromJS} from 'immutable';
import reducer from '../reducer';

/* test if the core functionailty can be applied to reducers as well */

describe('reducer', () =>{

  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      entries: ['Trainspotting']
    }));
  });

  it('handles NEX', () => {
    const initialState = fromJS({
      entries: ['Frozen', 'Moana']
    });
    const action = {type: 'NEXT'};
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(({
      vote: {
        pair: ['Frozen', 'Moana']
      },
      entries: []
    }));
  });

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Up', 'Finding Nemo'],
      },
      entries: []
    });
    const action = {type: 'VOTE', entry: 'Up'};
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Up', 'Finding Nemo'],
        tally: {'Up': 1}
      },
      entries: []
    }));
  });

/*  reducers if called with an undefined state,
initialize it with an empty map.*/
it('has an initial state', ()=>{
  const action = {type: 'SET_ENTRIES', entries:['Zootopia']};
  const nextState = reducer(undefined, action);

  expect(nextState).toEqual(fromJS({
    entries: ['Zootopia']
  }));
});

/* State with reduce and Immutable is tricky  need to find a workaround for it.*/
it('can be used with reduce', () => {
  const actions = [
    {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']},
    {type: 'NEXT'},
    // {type: 'VOTE', entry: 'Trainspotting'},
    // {type: 'VOTE', entry: '28 Days Later'},
    // {type: 'VOTE', entry: 'Trainspotting'},
    // {type: 'NEXT'}
  ];
  const finalState = actions.reduce(reducer, Map());

  expect(finalState).toEqual({
    vote: {
      pair: ['Trainspotting', '28 Days Later']
    },
    entries: []
  });
});

})
