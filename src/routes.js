/*jshint esversion: 6 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import {VotingContainer} from './App'
import Root from './Root';
// import Results from './components/Results';
import {ResultsContainer} from './components/Results';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={Root}>
        <IndexRoute component={VotingContainer} />
       <Route path="/results" component={ResultsContainer} />
   </Route>
 </Router>
);
export default Routes;
