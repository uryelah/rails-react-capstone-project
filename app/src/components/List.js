import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import Nav from './Nav';
import Carousel from './Carousel';
import list from '../styles/List.module.css';
import Loader from './Loader';

const List = ({ actions, state }) => {
  const parent = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    actions.fetchSubscription('https://aqueous-wildwood-18424.herokuapp.com/meets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  const [navOpen, setNavOpen] = useState(false);

  const { subscription } = state;

  const clickHandler = () => {
    if (navOpen) {
      setNavOpen(false);
    }
  };

  const KeyDownHandler = () => {
    clickHandler();
  };

  return (
    <div
      onClick={clickHandler}
      onKeyDown={KeyDownHandler}
      role="button"
      ref={parent}
      className={list.wrapper}
      aria-label="Close side navigation menu"
      tabIndex={-1}
    >
      <Nav open={navOpen} setNavOpen={setNavOpen} parent={parent} searchOpen={false} local="Meets" />
      <main className={list.main}>
        {subscription
          ? <Carousel count={subscription.length} list={subscription} />
          : <Loader />}
      </main>
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

List.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(List));
