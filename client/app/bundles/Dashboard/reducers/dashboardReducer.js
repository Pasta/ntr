import Immutable from 'immutable';

export const $$initialState = Immutable.fromJS({
    employees: [], // this is the default state that would be used if one were not passed into the store
});

export default function DashboardReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return $$state;
  }
}
