import merge from 'lodash/merge';
import { RECEIVE_CARDS } from '../requestActions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    default:
      return state;
  }
};
