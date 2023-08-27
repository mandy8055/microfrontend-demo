import React, { lazy, Suspense, useState } from 'react';
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
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <Router>
      <StylesProvider generateClassName={generateClassNames}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path='/auth'>
              <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path='/' component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};
