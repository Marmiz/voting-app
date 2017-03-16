/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import startServer from './server';
import makeStore from './store';

// export const store = makeStore();
// startServer(store);

const pair = ['Trainspotting', '28 Days Later'];

// get a starting point for our app.
// store.dispatch({
//   type: 'SET_ENTRIES',
//   entries: require('./entries.json')
// });
// store.dispatch({type: 'NEXT'});

ReactDOM.render(
  <App pair={pair}/>,
  document.getElementById('root')
);
