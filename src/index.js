  /*jshint esversion: 6 */
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import Root from './Root';
  // import Voting from './components/Voting';
  import './index.css';

  import {Router, Route, hashHistory, IndexRoute} from 'react-router';
  // var routes = require('./routes');
  import io from 'socket.io-client';
  import { browserHistory } from 'react-router';
  import {createStore, applyMiddleware} from 'redux';
  import reducer from './utils/reducer';
  import {Provider} from 'react-redux';
  import { setState } from './utils/actions-creator';
  import remoteActionMiddleware from './utils/remote_action_middleware';

  import Routes from './routes';

//   const store = createStore(reducer);
//   store.dispatch({
//   type: 'SET_STATE',
//   state: {
//     vote: {
//       pair: ['Sunshine', '28 Days Later'],
//       tally: {Sunshine: 2}
//     }
//   }
// });

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);



  ReactDOM.render(
    <Provider store={store}>
    <Routes history={browserHistory} />
    </Provider>,
    document.getElementById('root')
  );
