import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import Detail from './Detail';
import HiddenNav from './HiddenNav';
import Loader from './Loader';

const DetailsPage = ({
  state, actions, match,
}) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (state.authenticated
        && localStorage.getItem('token')
        && localStorage.getItem('token') !== 'undefined'
    ) {
      const token = localStorage.getItem('token');

      actions.fetchSubscription(`https://aqueous-wildwood-18424.herokuapp.com/meets/${match.params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }, [state.authenticated]);

  useEffect(() => {
    if (state.subscription && state.subscription.meet) {
      setItem(state.subscription.meet);
    }
  }, [state.subscription]);

  return (
    <div style={{
      height: '100%', overflow: 'hidden', pointerEvents: 'none', backgroundColor: '#f7f5fa', zIndex: 1,
    }}
    >
      {
        state.subscription && item
          ? (
            <>
              <Detail
                item={item}
                creator={state.subscription.user}
                meetings={state.subscription.meetings}
                current_user={state.currentUser.id}
              />
              <HiddenNav />
            </>
          )
          : <Loader />
      }
    </div>
  );
};

function mapStateToProps({ state }) {
  return { state: { ...state } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...houseActions }, dispatch),
  };
}

DetailsPage.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(DetailsPage));
