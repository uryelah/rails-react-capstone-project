import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import Loader from './Loader';
import Nav from './Nav';
import CarouselCard from './CarouselCard';
import list from '../styles/List.module.css';
import fav from '../styles/Favorites.module.css';

function SearchPage({
  history, match, state, actions,
}) {
  const [items, setItems] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
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

      actions.fetchSubscription(`https://aqueous-wildwood-18424.herokuapp.com/search/${match.params.term}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }, [state.authenticated]);

  useEffect(() => {
    if (state.subscription) {
      setItems(state.subscription);
    }
  }, [state.subscription]);

  return (
    <div className={list['wrapper--favorites']} ref={parent}>
      <Nav open={navOpen} setNavOpen={setNavOpen} parent={parent} searchOpen={false} local="Search" />
      {
        items
          ? (
            <main className={fav.main} style={{ width: '100%' }}>
              {items.length && items.length > 0
                ? items.map(item => (
                  <CarouselCard key={item.id} id={`card-${item.id}`} item={item} name={item.name} type="product" history={history} state={state} />
                ))
                : (
                  <div className={list.title} style={{ flexDirection: 'column', textAlign: 'center' }}>
                    <h1>Nothing found</h1>
                    <p><a href="/list">Check out the current meets here</a></p>
                  </div>
                )}
            </main>
          )
          : (<Loader />)
      }
    </div>
  );
}

function mapStateToProps({ state }) {
  return { state: { ...state } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...houseActions }, dispatch),
  };
}

SearchPage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SearchPage));
