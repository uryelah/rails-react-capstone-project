import React from 'react';
import Logo from './Logo';
import loader from '../styles/Loader.module.css';

const Loader = () => (
  <div className={loader.main}>
    <Logo />
  </div>
);

export default Loader;
