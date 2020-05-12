import {
  FETCH_SUBSCRIPTION_BEGIN,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
  AUTHENTICATION_SUCCESS,
  LOGOFF_SUCCESS,
} from '../actions/houseActions';

import subState from './initialState';

const subscriptionsReducer = (state = subState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: action.payload.auth_token,
        currentUser: action.payload.user,
      };
    case LOGOFF_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: false,
        currentUser: null,
      };
    case FETCH_SUBSCRIPTION_BEGIN:
      return {
        ...state,
        loading: true,
        subscription: null,
      };

    case FETCH_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        subscription: action.payload,
        loading: false,
      };

    case FETCH_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default subscriptionsReducer;
