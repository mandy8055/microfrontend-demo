import React from 'react';
import ReactDOM from 'react-dom';

// Mount function to start ut the app
function mount(el) {
  ReactDOM.render(<h1>Hello World</h1>, el);
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
