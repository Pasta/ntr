import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';
import reducers from '../reducers';
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

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return composedStore(createStore)(reducer, initialState);
};
