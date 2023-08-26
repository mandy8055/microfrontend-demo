import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';
const AuthApp = () => {
  const authRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigated } = mount(authRef.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigated);
  }, []);

  return <div ref={authRef} />;
};

export default AuthApp;
