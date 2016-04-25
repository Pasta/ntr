import { expect } from 'chai';
import { employeeSubmitting } from '../employeesActionCreators';
import deepFreeze from 'deep-freeze';

describe('Employee', () => {
  describe('Employee Actions', () => {
    it('sets the employee in submitting', () => {
      expect(employeeSubmitting(employee)).to.eql(
        {
          type: 'tsundoku/EMPLOYEE_SUBMITTING',
          employee: employee
        }
      );
    });
  });
});
