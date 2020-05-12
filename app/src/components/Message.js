import React from 'react';
import PropTypes from 'prop-types';
import mes from '../styles/Message.module.css';

const Message = ({
  currentUser, message, date, picture, name,
}) => (
  <div className={mes[currentUser ? 'main--rigth' : 'main--left']}>
    {currentUser
      ? null
      : (<img src={picture} className={mes.img} alt={name} />)}
    <div className={mes.text}>
      {message}
      <div className={mes.date}>
        <small>
          {date.toLocaleTimeString().replace(/:\d{2}\s/, ' ')}
        </small>
      </div>
    </div>
  </div>
);

Message.propTypes = {
  currentUser: PropTypes.bool,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.objectOf(PropTypes.any).isRequired,
  picture: PropTypes.string,
};

Message.defaultProps = {
  currentUser: false,
  picture: '',
};

export default Message;
