export const FETCH_SUBSCRIPTION_BEGIN = 'FETCH_SUBSCRIPTION_BEGIN';
export const FETCH_SUBSCRIPTION_SUCCESS = 'FETCH_SUBSCRIPTION_SUCCESS';
export const FETCH_SUBSCRIPTION_FAILURE = 'FETCH_SUBSCRIPTION_FAILURE';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const LOGOFF_SUCCESS = 'LOGOFF_SUCCESS';

const authenticationSuccess = payload => ({
  type: AUTHENTICATION_SUCCESS,
  payload,
});

const logoffSuccess = () => ({
  type: LOGOFF_SUCCESS,
});

const fetchSubscriptionBegin = subscriptionId => ({
  type: FETCH_SUBSCRIPTION_BEGIN,
  subscriptionId,
});

const fetchSubscriptionSuccess = payload => ({
  type: FETCH_SUBSCRIPTION_SUCCESS,
  payload,
});

const fetchSubscriptionFailure = error => ({
  type: FETCH_SUBSCRIPTION_FAILURE,
  payload: error,
});

function handleErrors(response) {
  if (!response.ok) { throw Error(JSON.stringify(response)); }
  return response;
}

function fetchSubscription(subscriptionEndpointUrl, options, auth, autoAuth) {
  if (auth !== 'SIGNOUT') {
    return dispatch => {
      dispatch(fetchSubscriptionBegin(subscriptionEndpointUrl, options));

      setTimeout(() => {
        fetch(subscriptionEndpointUrl, options)
          .then(handleErrors).then(res => res.json()).then(json => {
            if (auth === 'SIGNIN') {
              dispatch(authenticationSuccess(json));
            } else if (autoAuth) {
              dispatch(authenticationSuccess({ auth_token: autoAuth, user: json }));
            } else {
              dispatch(fetchSubscriptionSuccess(json));
            }
          })
          .catch(error => {
            dispatch(fetchSubscriptionFailure(`${error}`));
          });
      }, 2000);
    };
  }
  return dispatch => { dispatch(logoffSuccess()); };
}

export {
  fetchSubscription,
  fetchSubscriptionBegin,
  fetchSubscriptionSuccess,
  fetchSubscriptionFailure,
};
