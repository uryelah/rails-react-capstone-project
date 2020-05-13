/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Stars from '../components/Stars';
import app from '../styles/LandingPage.module.css';

const CarouselCard = ({
  id, item, name, type, history, state,
}) => {
  const {
    title, frequency, day, duration,
  } = item;

  const clickHandler = () => {
    history.push(`/details/${item.id}`, state);
  };

  const keyDownHandler = () => {
    clickHandler();
  };

  const content = type => {
    switch (type) {
      case 'chat':
        return (
          <>
            <img className={app['profile-pic--chat']} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile picure" />
          </>
        );
      case 'product':
        return (
          <>
            <img
              onClick={clickHandler}
              className={app['product-pic']}
              src="https://static01.nyt.com/images/2020/01/08/realestate/08IHH-URUGUAY-slide-NAQ6/08IHH-URUGUAY-slide-NAQ6-mobileMasterAt3x.jpg"
              alt="Product"
              tabIndex={-1}
              aria-label="Product"
              onKeyDown={keyDownHandler}
              role="button"
            />
            <div className={app['product-summary']}>
              <div className={app['summary-left']}>
                <h4 className={app['card-title']}>{title}</h4>
                <Stars points={2} />
              </div>
              <div className={app['summary-right']}>
                <p className={app['card-title']}>
                  {day.substring(0, 3)}
                  {' '}
                  -
                  {' '}
                  {duration}
                  h
                </p>
                <p className={app['summary-right__unit']}>
                  {frequency}
                  {' '}
                  meetings
                </p>
              </div>
            </div>
          </>
        );
      case 'testemunial':
        return (
          <>
            <img className={app['profile-pic']} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile picure" />
            <h4 className={app['card-title']}>Kate Swome</h4>
            <small>Designer</small>
            <p className={app['card-description']}>
              <q>
                "Circle is an excellent service to use and already a part of my weekly routine.
                I finally have people I enjoy the company of and can be myself with."
              </q>
            </p>
          </>
        );
      default:
        return (
          <>
            <img className={app['profile-pic']} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile picure" />
            <h4 className={app['card-title']}>Kate Swome</h4>
            <small>Designer</small>
            <p className={app['card-description']}>
              <q>
                "Circle is an excellent service to use and already a part of my weekly routine.
                I finally have people I enjoy the company of and can be myself with."
              </q>
            </p>
          </>
        );
    }
  };

  return (
    <div id={id} data-name={name} className={app[type === 'testemunial' ? 'carousel__item' : (type === 'chat' ? 'carousel__item--user' : 'carousel__item--product')]}>
      { content(type) }
    </div>
  );
};

function mapStateToProps({ state }) {
  return { state: { ...state } };
}

CarouselCard.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.PropTypes.any.isRequired,
  name: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

CarouselCard.defaultProps = {
  name: '',
}

export default connect(mapStateToProps, null)(withRouter(CarouselCard));
