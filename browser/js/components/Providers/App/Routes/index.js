'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {App, Home, NotFound, Chat, AirportMap, Changelog} from './imports'


const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='chat' component={Chat} />
    <Route path='changelog' component={Changelog} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;
