import Immutable from 'immutable';

export const $$initialState = Immutable.fromJS({
    employees: [], // this is the default state that would be used if one were not passed into the store
});

export default function DashboardReducer($$state = $$initialState, action) {
  const { type, employee } = action;
  console.log(type);
  console.log(employee);

  switch (type) {
    case 'tsundoku/EMPLOYEE_SUBMIT_SUCCESS':
      return $$state.withMutations(state => (
        state
          .updateIn(
            ['employees'],
            employees => employees.unshift(Immutable.fromJS(employee))
          )
          .merge({
            isSaving: false,
          })
      ));
    default:
      return $$state;
  }
}
