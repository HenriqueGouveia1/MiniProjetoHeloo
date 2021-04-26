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
    
        
       
          <Cadastro />
        

       
  </React.StrictMode>,
  document.getElementById('root')
);



