/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import SignUpPage from './containers/SignUpPage';
import Favorites from './containers/Favorites';
import MessagemsPage from './containers/MessagemsPage';
import SearchPage from './containers/SearchPage';
import Page from './containers/Page';
import List from './containers/List';
import Detail from './containers/Detail';
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
