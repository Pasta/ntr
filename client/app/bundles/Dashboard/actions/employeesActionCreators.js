// const EMPLOYEE_SUBMITTED = 'tsundoku/EMPLOYEE_SUBMITTED';
// export function employeeSubmitted(employee) {
//   return {
//     type: EMPLOYEE_SUBMITTED,
//     employee: employee
//   };
// }

const EMPLOYEE_SUBMITTING = 'tsundoku/EMPLOYEE_SUBMITTING';
export function employeeSubmitting(employee) {
  return {
    type: EMPLOYEE_SUBMITTING,
    employee: employee
  };
}
