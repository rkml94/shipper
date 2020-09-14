import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

// const Dashboard = Loadable({
//   loader: () => import('./views/Dashboard'),
//   loading: Loading,
// });
const DriverManagement = Loadable({
  loader: () => import('./views/Master/DriverManagement'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/master/drivermanagement', exact: true,  name: 'DriverManagement', component: DriverManagement }

];

export default routes;
