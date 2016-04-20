// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';
import EmployeesListItem from './employeesListItem'

// Simple example of a React "dumb" component
export default class EmployeesList extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
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
              return <EmployeesListItem first_name={employee.toObject()["first_name"]} last_name={employee.toObject()["last_name"]} />;
          })}
        </ul>
      </div>
    );
  }
}
