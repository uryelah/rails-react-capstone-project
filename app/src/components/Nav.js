import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Cover from './Cover';
import nav from '../styles/Nav.module.css';

const Nav = ({
  open, setNavOpen, parent, searchOpen, local, history, state,
}) => {
  const searchRef = useRef(null);
  const titleRef = useRef(null);

  const [search, setSearch] = useState(searchOpen);

  useEffect(() => {
    if (open) {
      parent.current.classList.add('off-to-the-side');
    } else {
      parent.current.classList.remove('off-to-the-side');
    }

    if (search) {
      searchRef.current.classList.remove('hidden');
      titleRef.current.classList.add('hidden');
      searchRef.current.parentElement.classList.add('exposed');
      titleRef.current.parentElement.classList.add('collapsed');
    } else {
      searchRef.current.classList.add('hidden');
      titleRef.current.classList.remove('hidden');
      searchRef.current.parentElement.classList.remove('exposed');
      titleRef.current.parentElement.classList.remove('collapsed');
    }
  }, [open, searchOpen, search]);

  const clickHandler = () => {
    setNavOpen(!open);
  };

  const keyDownHandler = e => {
    if (e.keyCode === 13) {
      clickHandler();
    }
  };

  const handleClick = (coverUp = false) => {
    if (coverUp === true) {
      setSearch(false);
    } else if (!search) {
      setSearch(!search);
    } else {
      history.push(`/search/${searchRef.current.value}`, state);
    }
  };

  const searchHandler = e => {
    if (e.keyCode === 13) {
      history.push(`/search/${e.target.value}`, state);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <>
      <nav className={nav.main}>
        <ul>
          <li>
            <i
              onClick={clickHandler}
              className="fas fa-bars"
              role="button"
              tabIndex={-1}
              aria-label="Open navigation menu"
              onKeyDown={keyDownHandler}
            />
          </li>
          <li>
            { ['detail', 'messages', 'favorites', 'search'].includes(local.toLowerCase())
              ? (
                <Link to="/list/">
                  <svg className={nav.ico} aria-hidden="true" focusable="true" data-prefix="fal" data-icon="chevron-left" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" className="" />
                  </svg>
                </Link>
              )

              : null}
            <h1 key={search} ref={titleRef} className={nav.title}>{local}</h1>
          </li>
          <li>
            <input onKeyDown={searchHandler} key={search} ref={searchRef} className="search-nav hidden" type="text" placeholder="Search..." />
            <i
              onClick={handleClick}
              className="fas fa-search search-ico"
              role="button"
              tabIndex={-1}
              aria-label="Search"
              onKeyDown={handleKeyDown}
            />
          </li>
        </ul>
      </nav>
      {search ? <Cover onClick={() => handleClick(true)} /> : null }
    </>
  );
};

Nav.propTypes = {
  open: PropTypes.bool,
  setNavOpen: PropTypes.func.isRequired,
  parent: PropTypes.objectOf(PropTypes.any).isRequired,
  searchOpen: PropTypes.bool,
  local: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

Nav.defaultProps = {
  open: false,
  searchOpen: false,
  local: '',
};

export default withRouter(Nav);
