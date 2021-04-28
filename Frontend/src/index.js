import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import AddProject from './pages/AddProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/AddProject">
          <AddProject />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

