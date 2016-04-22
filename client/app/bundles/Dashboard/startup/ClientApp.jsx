import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from '../store/dashboardStore';
import routes from '../routes/routes';
// import ManagersDashboard from '../containers/ManagersDashboard';
import { syncHistoryWithStore } from 'react-router-redux';

// export default props => {
//   const store = createStore(props);
//   return (
//       <Provider store={store}>
//         <ManagersDashboard />
//       </Provider>
//   );
// };

export default (props, location) => {
  const store = createStore(props);

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(
    browserHistory,
    store
  );

  return (
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
  );
};
