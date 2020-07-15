import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import Nav from '../components/Nav';
import Loader from '../components/Loader';
import CarouselCard from './CarouselCard';
import list from '../styles/List.module.css';
import fav from '../styles/Favorites.module.css';

const Favorites = ({ state, actions, history }) => {
  const [items, setItems] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const parent = useRef(null);

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
    } else if (state.authenticated
      && localStorage.getItem('token')
      && localStorage.getItem('token') !== 'undefined'
    ) {
      const token = localStorage.getItem('token');

      actions.fetchSubscription(`https://aqueous-wildwood-18424.herokuapp.com/user_meets/meets/${state.currentUser.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };

  useEffect(checkLogged, [state.authenticated]);

  useEffect(() => {
    if (state.subscription) {
      setItems(state.subscription.res);
    }
  }, [state.subscription]);

  return (
    <main className={list['wrapper--favorites']} ref={parent}>
      <Nav open={navOpen} setNavOpen={setNavOpen} parent={parent} searchOpen={false} local="Favorites" />
      {
        items
          ? (
            <main className={fav.main}>
              {items.length && items.length > 0
                ? items.map(item => (
                  <CarouselCard key={item.id} id={`card-${item.id}`} item={item} name={item.name} type="product" history={history} state={state} />
                ))
                : (
                  <div className={list.title} style={{ flexDirection: 'column' }}>
                    <h1>You have not favorited any meet yet</h1>
                    <p><a href="/list">Check out the current meets here</a></p>
                  </div>
                )}
            </main>
          )
          : (<Loader />)
      }
    </main>
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

Favorites.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Favorites));
