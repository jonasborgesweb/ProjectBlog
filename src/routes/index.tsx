import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SinglePosts from '../pages/SinglePosts';
import SingleUsers from '../pages/SingleUsers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path='/post/:id' component={SinglePosts} />
    <Route path='/users/:id' component={SingleUsers} />
  </Switch>
)


export default Routes;