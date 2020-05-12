import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import * as houseActions from '../actions/houseActions';
import nav from '../styles/HiddenNav.module.css';

const HiddenNav = ({ history, actions, state }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(state.currentUser);
  }, [state.currentUser]);

  const handleSubmit = async () => {
    actions.fetchSubscription('https://aqueous-wildwood-18424.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Length': 57,
        'Content-Type': 'application/json; charset=utf-8',
      },
      credentials: 'same-origin',
    }, 'SIGNOUT');
  };

  const clickHandler = e => {
    e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    handleSubmit();

    setTimeout(() => {
      history.push('/', state);
    }, 1000);
  };

  return (
    <aside id="me" className={nav.main}>
      <nav className={nav.side}>
        <div className={nav.profile}>
          {
            user
              ? (
                <>
                  <a className={nav['profile-picture']} href="/">
                    <img src={user.picture} alt="Current user profile" />
                  </a>
                  <h3><a href="/">{user.name}</a></h3>
                  <small className={nav.nick}>
                    <a href="/">
                      @
                      {user.name}
                    </a>
                  </small>
                </>
              )
              : null
          }
        </div>
        <ul>
          <li><Link to="/list">All Meets</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/">Groups</Link></li>
          <li><Link to="/">Statistics</Link></li>
        </ul>
        <div className={nav['nav-footer']}>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/uryelah/rails-react-capstone-project.git">Repository</a></li>
            <li><button type="button" onClick={clickHandler}>Logout</button></li>
          </ul>
        </div>
      </nav>
    </aside>
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

HiddenNav.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(HiddenNav));
