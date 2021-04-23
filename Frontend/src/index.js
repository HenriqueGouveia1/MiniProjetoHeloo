import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import AddProject from './pages/AddProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/cadastrar">
          <Cadastro />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/addproject">
          <AddProject/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

