import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import NavBar from './NavBar';
import app from '../../styles/LandingPage.module.css';
import notebook from '../../images/notebook.png';
import mobile from '../../images/mobile.png';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import users from '../../helpers/mocks';
import TestemonyCard from './TestemonyCard';
import './styles.css';

function LandingPage() {
  const ref = createRef();

  const handleClick = () => ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  return (
    <div className={app.main} style={{ overflowY: 'scroll', height: '100vh' }}>
      <NavBar />
      <Header onClick={handleClick} />
      <Section>
        <div ref={ref} className={app['content--top']}>
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
        <Slider className="slider" pauseOnHover slidesPerRow={1} arrows={false} dots swipe autoplay autoplaySpeed={5000}>
          {
            users.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <TestemonyCard
                  id={item.id}
                  name={item.name}
                  pic={item.pic}
                  profession={item.profession}
                  quote={item.quote}
                />
              </div>
            ))
          }
        </Slider>
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
