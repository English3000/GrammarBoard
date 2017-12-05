import React from 'react';
import ReactDOM from 'react-dom';
import openStore from './store';
import Connect from './connect';

document.addEventListener('DOMContentLoaded', () => {
  const store = openStore();
  window.getState = store.getState;
  ReactDOM.render(<Connect store={store}/>, document.getElementById('app-display'));
});
