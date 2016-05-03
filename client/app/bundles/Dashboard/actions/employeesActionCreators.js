import employeesRequestManager from 'lib/requestManagers/employeesRequestManager'

const EMPLOYEE_SUBMITTING = 'tsundoku/EMPLOYEE_SUBMITTING';
export function employeeSubmitting() {
  return {
    type: EMPLOYEE_SUBMITTING
  };
}

const EMPLOYEE_SUBMIT_SUCCESS = 'tsundoku/EMPLOYEE_SUBMIT_SUCCESS';
export function employeeSubmitSuccess(employee) {
  return {
    type: EMPLOYEE_SUBMIT_SUCCESS,
    employee: employee
  };
}

const EMPLOYEE_SUBMITTION_FAILED = 'tsundoku/EMPLOYEE_SUBMITTION_FAILED';
export function employeeSubmitFailure(error) {
  return {
    type: EMPLOYEE_SUBMITTION_FAILED,
    error: error
  };
}

export function submitEmployee(employee) {
  return dispatch => {
    dispatch(employeeSubmitting());
    return (
      employeesRequestManager
        .submitEntity({ employee })
        .then(res => dispatch(employeeSubmitSuccess(res.data["employee"])))
        .catch(res => dispatch(employeeSubmitFailure(res.data["employee"])))
    );
  };
}
