import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({ cards: cardsReducer,
                                 pageLoading: loadingReducer });
