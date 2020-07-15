import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import app from '../styles/LandingPage.module.css';

const Stars = ({ points }) => {
  const stars = useRef(null);
  const [point, setPoint] = useState(points);

  useEffect(() => {
    [...stars.current.children].reverse().forEach((star, i) => {
      if (i < point) {
        star.classList.add('star--on');
        star.classList.remove('star--off');
      }
    });
  }, [point, points, stars]);

  const clickHandler = e => {
    const dataPoints = parseInt(e.target.dataset.points, 10);
    if (dataPoints !== stars) {
      setPoint(dataPoints);
    }
  };

  const keyDownHandler = e => {
    if (e.keyCode === 13) {
      clickHandler(e);
    }
  };

  return (
    <div key={point} ref={stars} className={app.stars}>
      <i
        onClick={clickHandler}
        role="button"
        tabIndex={-1}
        aria-label="Rate it 5 stars"
        onKeyDown={keyDownHandler}
        className="fas fa-star star star--off"
        data-points={5}
      />
      <i
        onClick={clickHandler}
        role="button"
        tabIndex={-1}
        aria-label="Rate it 4 stars"
        onKeyDown={keyDownHandler}
        className="fas fa-star star star--off"
        data-points={4}
      />
      <i
        onClick={clickHandler}
        role="button"
        tabIndex={-1}
        aria-label="Rate it 3 stars"
        onKeyDown={keyDownHandler}
        className="fas fa-star star star--off"
        data-points={3}
      />
      <i
        onClick={clickHandler}
        role="button"
        tabIndex={-1}
        aria-label="Rate it 2 stars"
        onKeyDown={keyDownHandler}
        className="fas fa-star star star--off"
        data-points={2}
      />
      <i
        onClick={clickHandler}
        role="button"
        tabIndex={-1}
        aria-label="Rate it 1 stars"
        onKeyDown={keyDownHandler}
        className="fas fa-star star star--off"
        data-points={1}
      />
    </div>
  );
};

Stars.propTypes = {
  points: PropTypes.number,
};

Stars.defaultProps = {
  points: 1,
};

export default Stars;
