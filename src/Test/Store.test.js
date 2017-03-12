/*jshint esversion: 6 */
import {Map, fromJS} from 'immutable';

import makeStore from '../store';

describe('store', () => {
  it('is a Redux store', () => {
    const store = makeStore();
    expect(store.getState()).toEqual(Map());
    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });
    expect(store.getState()).toEqual(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });
});
