import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import HiddenNav from './HiddenNav';
import page from '../styles/Page.module.css';

const Page = ({
  history, state, actions, children,
}) => {

  const checkLogged = () => {
    if (state.authenticated
      && (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined')) {
      localStorage.setItem('token', state.authenticated);
      localStorage.setItem('id', state.currentUser.id);
    } else if (localStorage.getItem('token') && !state.authenticated) {
      const token = localStorage.getItem('token');
      const currentU = localStorage.getItem('id');

      actions.fetchSubscription(`https://aqueous-wildwood-18424.herokuapp.com/users/${currentU}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }, null, true);
    } else if (!state.authenticated) {
      history.push('/sign_in', state);
    }
  };

  useEffect(checkLogged, []);

  return (
    <div className={page.main}>
      { children }
      <HiddenNav />
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

Page.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Page));
