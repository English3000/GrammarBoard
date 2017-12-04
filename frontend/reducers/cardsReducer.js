import merge from 'lodash/merge';
import { FETCH_CARDS } from '../requestActions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case FETCH_CARDS:
      return action.cards;
    default:
      return state;
  }
};
