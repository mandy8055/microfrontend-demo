import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { SignIn, SignUp } from './components';

const generateClassNames = createGenerateClassName({
  productionPrefix: 'ah',
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassNames}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin' component={SignIn} />
          <Route path='/auth/signup' component={SignUp} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
