import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';
const AuthApp = () => {
  const dashboardRef = useRef(null);
  useEffect(() => {
    mount(dashboardRef.current);
  }, []);

  return <div ref={dashboardRef} />;
};

export default AuthApp;
