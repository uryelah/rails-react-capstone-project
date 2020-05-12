/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import SignUpPage from './components/SignUpPage';
import Favorites from './components/Favorites';
import MessagemsPage from './components/MessagemsPage';
import SearchPage from './components/SearchPage';
import Page from './components/Page';
import List from './components/List';
import Detail from './components/Detail';
import ConversationsList from './components/ConversationsList';

const App = () => (
  <Switch>
    <Route exact path="/list/" render={() => <Page condition><List /></Page>} />
    <Route exact path="/details/:id" render={() => <Page condition><Detail /></Page>} />
    <Route exact path="/search/:term" component={SearchPage} />
    <Route exact path="/favorites" render={() => <Page condition><Favorites /></Page>} />
    <Route exact path="/messages" component={MessagemsPage} />
    <Route exact path="/sign_up/" render={() => <SignUpPage {...{ type: 'UP' }} />} />
    <Route exact path="/sign_in/" render={() => <SignUpPage {...{ type: 'IN' }} />} />
    <Route path="/temp-chat" component={ConversationsList} />
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default App;
