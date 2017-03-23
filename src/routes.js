/*jshint esversion: 6 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Root from './Root';
import Results from './components/Results';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={Root}>
        <IndexRoute component={App} />
       <Route path="/results" component={Results} />
   </Route>
 </Router>
);
export default Routes;
