import React from 'react';
import PropTypes from 'prop-types';
import app from '../../styles/LandingPage.module.css';

const Section = props => {
  const {
    column, transparent, header, naked, children,
  } = props;
  let classname = column ? 'section--column' : 'section--row';

  if (transparent) {
    classname += '-transparent';
  }

  if (naked) {
    classname += '--naked';
  }

  if (header) {
    classname += '--header';
  }

  return (
    <section className={app[classname]}>
      {children}
    </section>
  );
};

Section.propTypes = {
  column: PropTypes.string,
  transparent: PropTypes.string,
  header: PropTypes.string,
  naked: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]),
};

Section.defaultProps = {
  column: null,
  transparent: null,
  header: null,
  naked: null,
  children: null,
};


export default Section;
