import * as API from './ajaxUtil';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const fetchCards = () => async (dispatch) => dispatch( receiveCards(await API.fetchPosts()) );
