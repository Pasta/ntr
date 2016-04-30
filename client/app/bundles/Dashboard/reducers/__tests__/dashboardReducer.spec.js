import { expect } from 'chai';
import dashboardReducer from '../dashboardReducer';
import deepFreeze from 'deep-freeze';

describe('dashboardReducer', () => {
  describe('Submit Employee', () => {
    it('add the employee the list of employees', () => {
      let error = { error: "monkey money"};
      expect(employeeSubmitFailure(error)).to.eql(
        {
          type: 'tsundoku/EMPLOYEE_SUBMITTION_FAILED',
          error: error
        }
      );
    });
  });
});
