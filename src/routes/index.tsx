import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import SinglePost from '../pages/SinglePost';

const Routes:React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path='/post/:id' component={SinglePost}/>
  </Switch>
)


export default Routes;