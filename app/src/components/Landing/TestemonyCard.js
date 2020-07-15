import React from 'react';
import PropTypes from 'prop-types';
import app from '../../styles/LandingPage.module.css';

const TestemonyCard = ({
  id, pic, name, profession, quote,
}) => (
  <div id={id} data-name={name} className={app.carousel__item}>
    <img className={app['profile-pic']} src={pic} alt="Profile picure" />
    <h4 className={app['card-title']}>{name}</h4>
    <small>{profession}</small>
    <p className={app['card-description']}>
      <q>
        { `"${quote}"`}
      </q>
    </p>
  </div>
);

TestemonyCard.propTypes = {
  id: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default TestemonyCard;
