import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storeReducer from './reducers/storeReducer';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default (preloadedState = {}) => createStore(
  storeReducer,
  preloadedState,
  applyMiddleware(...middlewares)
);
