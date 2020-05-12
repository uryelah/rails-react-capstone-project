import React from 'react';
import PropTypes from 'prop-types';
import a from '../styles/Alert.module.css';

const Alert = ({ message }) => (
  <div className={a.main}>
    <em>
      { message }
    </em>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
