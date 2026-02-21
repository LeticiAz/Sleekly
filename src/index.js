import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./css/1-variables.css";
import "./css/2-base.css";
import "./css/3-layout.css";
import "./css/4-components.css";
import "./css/5-sections.css";
import "./css/6-utilities.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
