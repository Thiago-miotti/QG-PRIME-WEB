import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Router from './router'
import {HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <HashRouter>
        <Router />
      </HashRouter>
);


