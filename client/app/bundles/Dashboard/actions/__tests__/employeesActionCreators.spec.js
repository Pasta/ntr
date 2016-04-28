import { expect } from 'chai';
import { employeeSubmitting, employeeSubmitSuccess, employeeSubmitFailure } from '../employeesActionCreators';
import deepFreeze from 'deep-freeze';

describe('Employee', () => {
  describe('Employee Actions', () => {
    it('sets the employee in submitting', () => {
      expect(employeeSubmitting()).to.eql(
        {
          type: 'tsundoku/EMPLOYEE_SUBMITTING'
        }
      );
    });
    it('sets the employee to submited', () => {
      let employee = { first_name: "monkey", last_name:"money"};
      expect(employeeSubmitSuccess(employee)).to.eql(
        {
          type: 'tsundoku/EMPLOYEE_SUBMIT_SUCCESS',
          employee: employee
        }
      );
    });
    it('sets the employee failed to submit', () => {
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
