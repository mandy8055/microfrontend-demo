import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Album from './components/Landing';
import Pricing from './components/Pricing';

const generateClassNames = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassNames}>
      <Router history={history}>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Album} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
