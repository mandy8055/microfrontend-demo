import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Header, ProgressBar } from './components';
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassNames = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassNames}>
        <Header />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path='/auth' component={AuthAppLazy} />
            <Route path='/' component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};
