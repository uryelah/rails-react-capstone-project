/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Logo from '../Logo';
import app from '../../styles/LandingPage.module.css';

const Footer = () => (
  <footer className={app.footer}>
    <ul>
      <li><Logo dark /></li>
      <li>Lafayette Ave 156, Brooklyn, NY, USA</li>
      <li>35 St Andrew's St, Cambridge CB2 3AR, Great Britain</li>
      <li>+347 853 106 681</li>
      <li className={app['social-bar']}>
        <a href="/" className={app['social-link--fb']}>
          <i className="fab fa-facebook-f" />
        </a>
        <a href="/" className={app['social-link--tw']}>
          <i className="fab fa-twitter" />
        </a>
        <a href="/" className={app['social-link--ig']}>
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li>Circle 2020. All rights reserved</li>
    </ul>
  </footer>
);

export default Footer;
