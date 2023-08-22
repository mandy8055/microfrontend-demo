import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassNames = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassNames}>
      <Router history={history}>
        <Switch></Switch>
      </Router>
    </StylesProvider>
  );
};
