import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StylesProvider } from '@material-ui/core';
import Album from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <StylesProvider>
      <Router>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Album} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
