import React from 'react';
import { PAGE_LOADING, RECEIVE_CARDS } from '../requestActions';

const _defaultState = {status: false};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case PAGE_LOADING:
      return {status: true};
    case RECEIVE_CARDS:
      return {status: false};
    default:
      return state;
  }
};
