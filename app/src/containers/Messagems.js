import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import Nav from '../components/Nav';
import Loader from '../components/Loader';
import Chat from '../components/Chat';
import list from '../styles/List.module.css';
import chat from '../styles/Chat.module.css';
import MessageBar from '../components/MessageBar';
import ChatPals from '../components/ChatPals';

const Messages = ({ actions, state }) => {
  const parent = useRef(null);

  const checkLogged = () => {
    const token = localStorage.getItem('token');
    actions.fetchSubscription('https://aqueous-wildwood-18424.herokuapp.com/meets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(checkLogged, []);

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
      <Nav open={navOpen} setNavOpen={setNavOpen} parent={parent} searchOpen={false} local="Messagems" />
      <main className={chat.wrapper}>
        {subscription
          ? (
            <>
              <ChatPals />
              <Chat />
              <MessageBar />
            </>
          )
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

Messages.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Messages);
