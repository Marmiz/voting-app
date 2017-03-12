/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import startServer from './server';
import makeStore from './store';

export const store = makeStore();
startServer();

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
