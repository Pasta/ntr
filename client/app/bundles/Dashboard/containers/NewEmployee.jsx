import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import EmployeeForm from '../components/employeeForm/employeeForm';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { $$dashboardStore: state.$$dashboardStore };
}

const NewEmployee = (props) => {
  const { dispatch, $$dashboardStore } = props;
  return (
    <EmployeeForm />
  );
}

  dispatch: PropTypes.func.isRequired,
  NewEmployee.propTypes = {

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$dashboardStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$dashboardStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
export default connect(select)(NewEmployee);
