import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import app from '../../styles/LandingPage.module.css';
import notebook from '../../images/notebook.png';
import mobile from '../../images/mobile.png';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import Carousel from '../Carousel';

function LandingPage() {
  return (
    <div className={app.main} style={{ overflowY: 'scroll', height: '100vh' }}>
      <NavBar />
      <Header />
      <Section>
        <div className={app['content--top']}>
          <small className={app['title-tip']}>Simple and fast way to socialize</small>
          <h3 className={app.title}>Friendly chats with reliable people</h3>
        </div>
        <div className={app['content--left']}>
          <h2 className={app['content-title']}>
            People all over the world, online, just like you
          </h2>
          <p>
            You will have the best tools to manage your friendships,
            remember to keep in touch, and keep information.
            Full control will save you from the stress of remembering
            conversation topics and important events.
          </p>
          <Link to="/sign_up/" className="btn btn--orange" type="button">Learn more</Link>
        </div>
        <div className={app['content--right--img']}>
          <img src={notebook} alt="Notebook screen" />
        </div>
      </Section>

      <Section transparent="transparent">
        <div className={app['content--left--img']}>
          <img src={mobile} style={{ width: '300px' }} alt="Mobile screen" />
        </div>
        <div className={app['content--right']}>
          <h2 className={app['content-title']}>
            People all over the world, online, just like you
          </h2>
          <p>
            You will have the best tools to manage your friendships,
            remember to keep in touch, and keep information.
            Full control will save you from the stress of remembering
            conversation topics and important events.
          </p>
          <Link to="/sign_up/" className="btn btn--orange" type="button">Learn more</Link>
        </div>
      </Section>

      <Section naked="naked">
        <div className={app['content--top']}>
          <small className={app['title-tip']}>People are already enjoying the service</small>
          <h3 className={app.title}>Look at what people have to say</h3>
        </div>
        <Carousel controllers count={10} list={new Array(10).fill([])} />
      </Section>

      <Section column="column" transparent="transparent" header="header">
        <p className={app['cta-secondary']}>Be with everyone online</p>
        <Link to="/sign_up/" className="btn btn--orange" type="button">Start Free</Link>
      </Section>
      <Footer />
    </div>
  );
}

export default LandingPage;
