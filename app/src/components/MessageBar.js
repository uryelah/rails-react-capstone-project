import React from 'react';
import bar from '../styles/MessageBar.module.css';

const MessageBar = () => (
  <form className={bar.main}>
    <input className={bar.input} type="text" placeholder="Your message" />
    <button className={bar.send} type="submit">
      <i className="fas fa-paper-plane" />
    </button>
  </form>
);

export default MessageBar;
