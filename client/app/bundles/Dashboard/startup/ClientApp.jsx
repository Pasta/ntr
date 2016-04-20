import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/dashboardStore';
import ManagersDashboard from '../containers/ManagersDashboard';

export default props => {
  const store = createStore(props);
  return (
      <Provider store={store}>
        <ManagersDashboard />
      </Provider>
  );
};
