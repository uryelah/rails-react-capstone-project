import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import app from '../../styles/LandingPage.module.css';

const NavBar = () => (
  <nav className={app.nav}>
    <Logo />
    <ul className={app['nav-row']}>
      <li className="btn">
        <a href="https://github.com/uryelah/rails-react-capstone-project.git">Download</a>
      </li>
      <li className="btn">
        <Link to="/sign_in/">Sign In</Link>
      </li>
      <li className="btn btn-translucid">
        <Link to="/sign_up/">Sign Up</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
