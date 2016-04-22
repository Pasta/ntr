import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import Layout from '../layout/Layout';
import ManagersDashboard from '../containers/ManagersDashboard';
import NewEmployee from '../containers/NewEmployee';

export default (
  <Route path="/">
    <IndexRoute
      component={ManagersDashboard}
    />
    <Route
      path="employees"
      component={ManagersDashboard}
    />
    <Route
      path="employees/new"
      component={NewEmployee}
    />
  </Route>
);
