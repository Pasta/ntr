import React, { PropTypes } from 'react';
import _ from 'lodash';
import EmployeesListItem from '../employeesListItem/employeesListItem'
import { Link } from 'react-router';

// Simple example of a React "dumb" component
export default class EmployeesList extends React.Component {
  static propTypes = {
    employees: PropTypes.object.isRequired,
  };

  // constructor(props, context) {
  //   super(props, context);
  //
  //   // Uses lodash to bind all methods to the context of the object instance, otherwise
  //   // the methods defined here would not refer to the component's class, not the component
  //   // instance itself.
  //   _.bindAll(this, 'handleChange');
  // }


  render() {
    const { employees } = this.props;
    return (
      <div>
        <h1>Employees List</h1>
        <ul>
          {employees.map(function(employee) {
              return <EmployeesListItem key={employee.toObject()["id"]} first_name={employee.toObject()["first_name"]} last_name={employee.toObject()["last_name"]} />;
          })}
        </ul>
        <Link to="employees/new">
          new employee
        </Link>
      </div>
    );
  }
}
