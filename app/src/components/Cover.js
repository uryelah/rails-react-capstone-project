import React from 'react';
import PropTypes from 'prop-types';
import cover from '../styles/Cover.module.css';

const Cover = ({ onClick }) => {
  const keyDownHandler = e => {
    if (e.keyCode) {
      onClick(e);
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={onClick}
      className={cover.main}
      tabIndex={-1}
      aria-label="Page cover"
      onKeyDown={keyDownHandler}
      role="button"
    />
  );
};

Cover.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Cover;
