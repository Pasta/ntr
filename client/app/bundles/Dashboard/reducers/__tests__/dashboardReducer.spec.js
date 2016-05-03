import { expect } from 'chai';
import dashboardReducer from '../dashboardReducer';
import deepFreeze from 'deep-freeze';
import Immutable from 'immutable';

describe('dashboardReducer', () => {
  describe('Submit Employee', () => {
    it('adds the employee the list of employees', () => {
      let employee = { first_name: "monkey", last_name:"money", position:"title"};
      let oldState = Immutable.fromJS({ employees:[], isSaving: true })
      let newState = Immutable.fromJS({ employees:[employee], isSaving: false })
      let action = { type: 'tsundoku/EMPLOYEE_SUBMIT_SUCCESS', employee: employee }
      expect(dashboardReducer(oldState, action)).to.eql(newState);
    });
  });
});
