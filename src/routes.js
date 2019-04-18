import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/components/Home';
import NotFound from '@/components/NotFound';

export const appRoutes = [
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/page-not-found',
    exact: false,
    component: NotFound,
  },
];

export default function() {
  return (
    <Switch>
      {appRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}
