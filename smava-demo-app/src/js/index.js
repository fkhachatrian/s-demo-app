/*jshint esversion: 6 */

import 'babel-polyfill';

import '../less/app.less';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/containers/App';

(function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
})();
