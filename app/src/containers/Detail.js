/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as houseActions from '../actions/houseActions';
import Nav from '../components/Nav';
import list from '../styles/List.module.css';
import Stars from '../components/Stars';
import Loader from '../components/Loader';

const Detail = ({
  state, actions, history, match,
}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [fullText, setFullText] = useState(false);
  const [item, setItem] = useState(null);

  const parent = useRef(null);

  const checkLogged = () => {
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
  };

  useEffect(checkLogged, [state.authenticated]);

  useEffect(() => {
    if (state.subscription && state.subscription.meet) {
      setItem(state.subscription.meet);
    }
  }, [state.subscription]);

  useEffect(() => {
    if (navOpen === true) {
      setFullText(false);
    }
  }, [navOpen]);

  const clickHandler = () => {
    setFullText(!fullText);
  };

  const keyDownHandler = () => {
    clickHandler();
  };

  const handleClick = () => {
    history.push('/messages/');
  };

  const handleFavorite = () => {
    const token = localStorage.getItem('token');

    fetch('https://aqueous-wildwood-18424.herokuapp.com/user_meets/', {
      method: 'POST',
      body: JSON.stringify({
        user_id: `${state.currentUser.id}`,
        meet_id: `${item.id}`,
      }),
      headers: {
        'Content-Length': 57,
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'same-origin',
    })
      .then(res => res.json()).then(_json => {
        history.push('/favorites/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className={list['wrapper--details']} ref={parent}>
      <Nav open={navOpen} setNavOpen={setNavOpen} parent={parent} searchOpen={false} local="Detail" />

      { item
        ? (
          <main className={list[!fullText ? 'main--details' : 'main--details--open']}>
            <div className={list.image}>
              <div className={list.left}>
                <div className={list['profile-picture']}>
                  <img src={state.subscription.user.picture} alt="User" />
                </div>
                <div>
                  <h5>{state.subscription.user.name}</h5>
                  <Stars points={3} />
                </div>
              </div>
              <div className={list.right}>
                <h5>
                  {item.day.substring(0, 3)}
                  {' '}
                  -
                  {' '}
                  {item.duration}
                  h
                </h5>
                <small>
                  {item.frequency}
                  {' '}
                  meetings
                </small>
              </div>
            </div>
            <div className={list.description}>
              <h4 className={list.title}>
                { item.title }
                <button onClick={handleFavorite} className="btn btn-transparent" type="button">Add to favorites</button>
              </h4>
              <div className={list[!fullText ? 'summary--min' : 'summary']}>
                { item.description }
                <hr />
                <h5>Next Meetings</h5>
                { state.subscription.meetings.map(meeting => (
                  <div key={meeting.id}>
                    <h6 className={list['meeting-title']}>{meeting.title}</h6>
                    <em>{Date(meeting.date)}</em>
                    <p>
                      Confirmed participants:
                      {meeting.confirmed_members}
                    </p>
                    <a className={list['meeting-link']} href={`${meeting.link}`}>
                      <img className={list.zoom} src="https://seeklogo.com/images/Z/zoom-icon-logo-C552F99BAC-seeklogo.com.png" alt="Zoom online meeting link" />
                      Meeting link
                    </a>
                  </div>
                )) }
              </div>
              <div
                role="button"
                onClick={clickHandler}
                className={list.down}
                tabIndex={-1}
                aria-label={!fullText ? 'Show full text' : 'Hide text'}
                onKeyDown={keyDownHandler}
              >
                {
                !fullText
                  ? (
                    <svg className={list['down-arrow']} aria-hidden="true" focusable="true" data-prefix="fal" data-icon="chevron-down" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" className="" />
                    </svg>
                  ) : (
                    <svg className={list['down-arrow']} aria-hidden="true" focusable="true" data-prefix="fal" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M4.465 366.475l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L224 178.053l195.494 195.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.051c-4.686-4.686-12.284-4.686-16.971 0L4.465 349.505c-4.687 4.686-4.687 12.284 0 16.97z" className="" />
                    </svg>
                  )
              }

              </div>
              <button onClick={handleClick} className="btn btn--orange--full" type="button">
                Apply to join
              </button>
            </div>
          </main>
        )
        : <Loader />}
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

Detail.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Detail));
