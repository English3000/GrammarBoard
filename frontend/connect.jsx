import React from 'react';
import { Provider } from 'react-redux';
import GrammarBoardContainer from './pageContainer';

export default ({ store }) => (
  <Provider store={store}>
    <GrammarBoardContainer/>
  </Provider>
);
