import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class EmployeeForm extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
  }

  render() {
    return (
      <form className="form-employee">
        <label>
          First Name:
        </label>
        <input type="text" value={first_name} onChange={this.handleChange}/>
        <input type="text" value={last_name} onChange={this.handleChange}/>
        <input type="text" value={position} onChange={this.handleChange}/>
      </form>
    );
  }
}
