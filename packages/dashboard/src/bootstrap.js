import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

// Mount function to start ut the app
function mount(el) {
  const app = createApp(Dashboard);
  app.mount(el);
}
// If we are in development and in isolation,
// call the mount function immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}
// We are running through container
// and we should export the mount function
export { mount };
