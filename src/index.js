  /*jshint esversion: 6 */
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import Root from './Root';
  // import Voting from './components/Voting';
  import './index.css';
  // import startServer from './server';
  // import makeStore from './store';
  import {Router, Route, hashHistory, IndexRoute} from 'react-router';
  // var routes = require('./routes');
  import { browserHistory } from 'react-router';

  import Routes from './routes';

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
    <Routes history={browserHistory} />,
    document.getElementById('root')
  );
