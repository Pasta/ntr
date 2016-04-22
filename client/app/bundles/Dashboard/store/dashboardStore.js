import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';
import reducers from '../reducers';
import { routerReducer } from 'react-router-redux';
import { initialStates } from '../reducers';
import Immutable from 'immutable';

export default props => {

  const { employees } = props;
  const { $$dashboardState } = initialStates;
  const initialState =  {
    $$dashboardStore: $$dashboardState.merge({
      employees: employees,
    }),
  };


  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  // Sync dispatched route actions to the history
  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )(createStore);

  return finalCreateStore(reducer, initialState);
  //
  //
  // const reducer = combineReducers(reducers);
  // const composedStore = compose(
  //   applyMiddleware(thunkMiddleware, loggerMiddleware)
  // );
  //
  // return composedStore(createStore)(reducer, initialState);
};
