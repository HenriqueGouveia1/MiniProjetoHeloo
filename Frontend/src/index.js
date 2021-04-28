import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
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
        <Route path="/cad">
          <Cadastro />
        </Route>
        <Route path="/AddProject">
          <AddProject />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

