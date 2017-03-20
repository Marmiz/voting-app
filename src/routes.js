/*jshint esversion: 6 */
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Test from './components/Test';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/test" component={Test} />
   </Route>
 </Router>
);
export default Routes;
