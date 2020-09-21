import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import routes from './router/index.js';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('root')
);