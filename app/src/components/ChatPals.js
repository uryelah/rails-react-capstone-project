import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

function ChatPals({ pals }) {
  return (
    <>
      <Carousel count={pals || 5} chat users={[{ name: 'Sarah' }, { name: 'Katie' }, { name: 'Don' }, { name: 'Lilah' }, { name: 'Guadalupe' }, { name: 'etf' }]} />
    </>
  );
}

ChatPals.propTypes = {
  pals: PropTypes.objectOf(PropTypes.any),
};

ChatPals.defaultProps = {
  pals: null,
};

export default ChatPals;
