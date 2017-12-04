import React from 'react';
import { Provider } from 'react-redux';
import GrammarBoard from './page';

export default ({ store }) => (
  <Provider store={store}>
    <GrammarBoard/>
  </Provider>
);
