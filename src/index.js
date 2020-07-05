import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import user from './user';
import visit from './visit';
import pagenotfound from './pagenotfound';

const routing = (
  <Router>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/user"> user </Link>
      </li>
      <li>
      <Link to="/visit"> visit </Link>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/user" component={user}></Route>
      <Route path="/visit" component={visit}></Route>
      <Route component={pagenotfound}></Route>
    </Switch>
  </Router>
);

ReactDOM.render (
  routing,
  document.getElementById('root')
);
