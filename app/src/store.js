import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import subscriptionsReducer from './reducers/houses';

const reducer = combineReducers({ state: subscriptionsReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
