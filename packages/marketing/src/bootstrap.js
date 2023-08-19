import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start ut the app
function mount(el) {
  ReactDOM.render(<App />, el);
}
// If we are in development and in isolation,
// call the mount function immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}
// We are running through container
// and we should export the mount function
export { mount };
