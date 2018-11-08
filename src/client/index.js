import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ordertrack from './Ordertrack'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/orderstatus/:id/:zip" component={Ordertrack} />
      </div>
  </Router>,
  document.getElementById('root')
);
