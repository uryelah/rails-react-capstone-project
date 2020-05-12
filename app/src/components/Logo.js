import React from 'react';
import PropTypes from 'prop-types';
import logo from '../styles/Logo.module.css';

const Logo = ({ dark }) => (
  <a href="/" className={logo.main}>
    <svg className={logo.circle} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ec5200" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="13" fill="none" transform="rotate(90 50 50)" />
    </svg>
    <div className={logo['text-container']}>
      <span className={dark ? logo['text--dark'] : logo['text--light']}>Circle</span>
    </div>
  </a>
);

Logo.propTypes = {
  dark: PropTypes.bool,
};

Logo.defaultProps = {
  dark: false,
};

export default Logo;
