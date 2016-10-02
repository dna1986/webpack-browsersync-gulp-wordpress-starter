/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from "./js/hello";
import "./css/style.css";

ReactDOM.render(
  <Hello name="ciao" />,
  document.getElementById('app')
);
