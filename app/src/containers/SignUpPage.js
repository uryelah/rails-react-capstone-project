import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import * as houseActions from '../actions/houseActions';
import signup from '../styles/SignUpPage.module.css';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

const SignUpPage = ({
  history, type, actions, state,
}) => {
  const [alert, setAlert] = useState(false);

  const form = useRef(null);

  useEffect(() => {
    if (state.authenticated
      && (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined')) {
      history.push('/list', state);
      localStorage.setItem('token', state.authenticated);
      localStorage.setItem('id', state.currentUser.id);
    } else if (localStorage.getItem('token') && !state.authenticated) {
      const token = localStorage.getItem('token');
      const currentU = localStorage.getItem('id');

      actions.fetchSubscription(`https://aqueous-wildwood-18424.herokuapp.com/users/${currentU}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }, null, true);
    } else if (state.authenticated) {
      history.push('/list', state);
    }
  }, [state.authenticated]);

  const handleSubmit = async formContent => {
    if (type === 'IN') {
      actions.fetchSubscription('https://aqueous-wildwood-18424.herokuapp.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: `${formContent.email}`,
          password: `${formContent.password}`,
        }),
        headers: {
          'Content-Length': 57,
          'Content-Type': 'application/json; charset=utf-8',
        },
        credentials: 'same-origin',
      }, 'SIGNIN');
    } else if (type === 'UP') {
      actions.fetchSubscription('https://aqueous-wildwood-18424.herokuapp.com/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: `${formContent.email}`,
          password: `${formContent.password}`,
          password_confirmation: `${formContent.passwordConfirmation}`,
          name: `${formContent.name}`,
          picture: 'https://joeschmoe.io/api/v1/random',
        }),
        headers: {
          'Content-Length': 57,
          'Content-Type': 'application/json; charset=utf-8',
        },
        credentials: 'same-origin',
      }, 'SIGNIN');
    }
  };

  const clickHandler = async e => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      const formContent = {
        email: '',
        password: '',
        passwordConfirmation: '',
        name: '',
      };

      [...form.current.elements].forEach(input => {
        if (input.id === 'email') {
          formContent.email = input.value;
        } else if (input.id === 'password') {
          formContent.password = input.value;
        } else if (input.id === 'confirmPassword') {
          formContent.passwordConfirmation = input.value;
        } else if (input.id === 'userName') {
          formContent.name = input.value;
        }
      });

      const result = await handleSubmit(formContent);

      if (result) {
        setAlert(false);
        history.push('/list', state);
      }
    } else {
      setAlert('Please enter both email and password');
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  return (
    <main key={alert} className={signup.main}>
      {
        alert ? (<Alert message={alert} />) : null
      }
      <header>
        <h1>{`Sign ${type === 'IN' ? 'in' : 'up'}`}</h1>
        <small>
          {type === 'IN' ? 'Welcome back! Sign in and meet with your friends' : 'Hello there! Sign up and start meeting new friends'}
        </small>
      </header>
      {
        state.loading
          ? <Loader />
          : (
            <form ref={form} className={signup.form}>
              <label htmlFor="email">
                <input className={signup.input} id="email" type="email" placeholder="your@mail.com" required />
              </label>
              <label htmlFor="password">
                <input className={signup.input} id="password" type="password" placeholder="password" required />
              </label>
              {type === 'IN' ? null : (
                <>
                  <label htmlFor="confirmPassword">
                    <input className={signup.input} id="confirmPassword" type="password" placeholder="confirm password" required />
                  </label>
                  <label htmlFor="userName">
                    <input className={signup.input} id="userName" type="text" placeholder="username" required />
                  </label>
                </>
              )}
              <button onClick={clickHandler} type="submit" className="btn btn--orange">
                {type === 'IN' ? 'Sign in' : 'Sign up'}
              </button>
              {
                type === 'IN'
                  ? (<Link to="/sign_up">Sign up</Link>)
                  : (<Link to="/sign_in">Sign in</Link>)
              }
            </form>
          )
      }
      <Link to="/" className={signup.back}>{'< Back'}</Link>
    </main>
  );
};

function mapStateToProps({ state }) {
  return { state: { ...state } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...houseActions }, dispatch),
  };
}

SignUpPage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SignUpPage));
