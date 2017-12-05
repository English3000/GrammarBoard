import * as API from './ajaxUtil';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const fetchCards = () => async (dispatch) => {
  dispatch(pageLoading());
  return dispatch( receiveCards(await API.fetchCards()) );
}

export const PAGE_LOADING = 'PAGE_LOADING';
export const pageLoading = () => ({type: PAGE_LOADING});
