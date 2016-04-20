// This file is our manifest of all reducers for the app.
// A real world app will likely have many reducers and it helps to organize them in one file.
import dashboardReducer from './dashboardReducer';
import { $$initialState as $$dashboardState } from './dashboardReducer';

export default {
  $$dashboardStore: dashboardReducer,
};

export const initialStates = {
  $$dashboardState,
};
