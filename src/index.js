import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//fix facebook redirection hash url
if (window.location.hash == "#_=_")
  window.location.hash = "";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

