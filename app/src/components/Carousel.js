/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import app from '../styles/LandingPage.module.css';
import CarouselCard from './CarouselCard';

const Carousel = ({
  count, chat, controllers, users, list,
}) => {
  const scroller = useRef(null);
  const counter = useRef(null);
  let width = controllers ? 450 : window.innerWidth * 0.8;
  width = chat ? 66 : width;

  let cardPerView = 0;
  let currentCard = 0;

  useEffect(() => {
    if (count < 1) { return; }

    scroller.current.scrollTo(0, 0);
    cardPerView = Math.floor(scroller.current.clientWidth / (width));
    currentCard = Math.floor((cardPerView / 2) + (scroller.current.scrollLeft / width));
    if (document.getElementById(`card-${currentCard}`)) {
      document.getElementById(`card-${currentCard}`).classList.add('carousel__item--active');
    }

    if (controllers) {
      document.getElementById(`controller-${currentCard}`).classList.add('carousel__controller--on');
    }
  }, [scroller]);

  const clickHandler = e => {
    const x = parseInt(e.target.dataset.x, 10);
    scroller.current.scrollTo(x === 0 ? x : x - width, 0);

    [...new Array(count)].forEach((_user, i) => {
      if (i === x / width) {
        document.getElementById(`card-${i}`).classList.add('carousel__item--active');
        if (controllers) {
          document.getElementById(`controller-${i}`).classList.add('carousel__controller--on');
        }
      } else {
        document.getElementById(`card-${i}`).classList.remove('carousel__item--active');
        if (controllers) {
          document.getElementById(`controller-${i}`).classList.remove('carousel__controller--on');
        }
      }
    });
  };

  const keyDownHandler = e => {
    if (e.keyCode === 13) {
      clickHandler(e);
    }
  };

  const scrollHandler = () => {
    let scrollTo = (cardPerView / 2) + (scroller.current.scrollLeft / width);

    scrollTo = Math.floor(scrollTo);

    if (chat && document.getElementById(`card-${scrollTo}`)) {
      if ((cardPerView / 2) + (scroller.current.scrollLeft / width) <= 1.5) {
        document.getElementById('card-0').classList.add('carousel__item--active');
        document.getElementById('controller-0').classList.add('carousel__controller--on');
        document.getElementById('card-1').classList.remove('carousel__item--active');
        document.getElementById('controller-1').classList.remove('carousel__controller--on');
        return;
      } if (scroller.current.scrollLeftMax - scroller.current.scrollLeft < 4) {
        document.getElementById(`card-${count - 1}`).classList.add('carousel__item--active');
        document.getElementById(`controller-${count - 1}`).classList.add('carousel__controller--on');
        document.getElementById(`card-${count - 2}`).classList.remove('carousel__item--active');
        document.getElementById(`controller-${count - 2}`).classList.remove('carousel__controller--on');
        return;
      }
      document.getElementById(`card-${scrollTo}`).classList.add('carousel__item--active');
      document.getElementById(`controller-${scrollTo}`).classList.add('carousel__controller--on');
      if (scrollTo === count - 2 && scroller.current.scrollLeftMax - scroller.current.scrollLeft >= 4) {
        document.getElementById(`card-${count - 1}`).classList.remove('carousel__item--active');
        document.getElementById(`controller-${count - 1}`).classList.remove('carousel__controller--on');
      }

      if (scrollTo > 0) {
        document.getElementById(`card-${scrollTo - 1}`).classList.remove('carousel__item--active');
        document.getElementById(`controller-${scrollTo - 1}`).classList.remove('carousel__controller--on');
      }
      if (scrollTo < count - 2) {
        document.getElementById(`card-${scrollTo + 1}`).classList.remove('carousel__item--active');
        document.getElementById(`controller-${scrollTo + 1}`).classList.remove('carousel__controller--on');
      }
      return;
    }

    if (document.getElementById(`card-${scrollTo}`)) {
      document.getElementById(`card-${scrollTo}`).classList.add('carousel__item--active');
    }
    if (controllers) {
      document.getElementById(`controller-${scrollTo}`).classList.add('carousel__controller--on');
    }

    if (scrollTo > 0) {
      document.getElementById(`card-${scrollTo - 1}`).classList.remove('carousel__item--active');
      if (controllers) {
        document.getElementById(`controller-${scrollTo - 1}`).classList.remove('carousel__controller--on');
      }
      if (counter.current) {
        counter.current.innerText = !controllers ? scrollTo + 1 : null;
      }
    }

    if (scrollTo < count - 1) {
      document.getElementById(`card-${scrollTo + 1}`).classList.remove('carousel__item--active');
      if (controllers) {
        document.getElementById(`controller-${scrollTo + 1}`).classList.remove('carousel__controller--on');
      }
      if (counter.current) {
        counter.current.innerText = !controllers ? scrollTo + 1 : null;
      }
    }
  };

  const controllerElement = type => {
    switch (type) {
      case 'chat':
        return (
          <div className={app['count--chat']}>
            <span ref={counter}>1</span>
            {users.map((user, i) => (<div onClick={clickHandler} key={user.id} data-x={i * width} id={`controller-${i}`} role="button" tabIndex={-1} aria-label="Chat friend name" className="carousel__controller--chat">{user.name}</div>))}
          </div>
        );
      case 'product':
        return (
          <div className={app.count}>
            <span ref={counter}>1</span>
            /
            {count}
          </div>
        );
      case 'testemunial':
        return (
          <div className={app.carousel__controllers}>
            {[...new Array(count)].map((item, i) => <div key={item} data-x={i * width} id={`controller-${i}`} role="button" tabIndex={-1} aria-label="Carousel controller" onKeyDown={keyDownHandler} onClick={clickHandler} className="carousel__controller" />)}
          </div>
        );
      default:
        return (
          <div className={app.carousel__controllers}>
            {[...new Array(count)].map((item, i) => <div key={item} data-x={i * width} id={`controller-${i}`} role="button" tabIndex={-1} aria-label="Carousel controller" onKeyDown={keyDownHandler} onClick={clickHandler} className="carousel__controller" />)}
          </div>
        );
    }
  };

  return (
    <div onScroll={scrollHandler} ref={scroller} className={app[chat ? 'content--carousel--chat' : 'content--carousel']}>
      {count > 0 && list && [...list].map((item, i) => <CarouselCard key={item.id} item={item} id={`card-${i}`} name={users && users.length ? users[i].name : null} type={controllers ? 'testemunial' : (chat ? 'chat' : 'product')} />)}

      {count > 0 && chat && [...users].map((item, i) => <CarouselCard key={item.id} item={item} id={`card-${i}`} name={users && users.length ? users[i].name : null} type={controllers ? 'testemunial' : (chat ? 'chat' : 'product')} />)}

      {count > 0 && controllerElement(controllers ? 'testemunial' : (chat ? 'chat' : 'product')) }
    </div>
  );
};

Carousel.propTypes = {
  count: PropTypes.number.isRequired,
  chat: PropTypes.bool.isRequired,
  controllers: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
