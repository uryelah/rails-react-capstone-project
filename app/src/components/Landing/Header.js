import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import app from '../../styles/LandingPage.module.css';

const Header = ({ onClick }) => {
  const page = useRef(null);

  const handleKeyDown = e => {
    if (e.keyCode) {
      onClick();
    }
  };

  return (
    <header ref={page} className={app.header}>
      <article className={app.cta}>
        <h1 className={app['cta-title']}>Find your circle</h1>
        <p>
          Groups based on your interests, personality type,
          online around the world, people that really get you.
        </p>
        <Link to="/sign_up/" className="btn btn--orange" type="button">
          Start Free
        </Link>
      </article>
      <div className={app.down} role="button" tabIndex={-1} onKeyDown={handleKeyDown} onClick={onClick}>
        <svg className={app['down-arrow']} aria-hidden="true" focusable="true" data-prefix="fal" data-icon="chevron-down" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" className="" />
        </svg>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
