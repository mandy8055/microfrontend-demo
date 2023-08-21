import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';
const MarketingApp = () => {
  const marketingRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigated } = mount(marketingRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigated);
  }, []);

  return <div ref={marketingRef} />;
};

export default MarketingApp;
