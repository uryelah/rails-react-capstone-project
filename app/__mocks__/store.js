import { combineReducers, createStore } from 'redux';
import subscriptionsReducer from './reducers/houses';

const reducer = combineReducers({ state: subscriptionsReducer });

const store = createStore(reducer);

export default store;
