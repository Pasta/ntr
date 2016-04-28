import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class EmployeeForm extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    position: PropTypes.string,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, ['handleChange', 'handleSubmit']);
  }


  // React will automatically provide us with the event `e`
  handleChange(e) {
    let employee = { first_name:this.refs.first_name.value, last_name:this.refs.last_name.value, position:this.refs.position.value };
    this.setState({ employee });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { actions } = this.props;
    actions
      .submitEmployee(this.state.employee)
      .then();
  }

  render() {
    const { first_name, last_name, position} = this.props;
    return (
      <form className="form-employee" onSubmit={this.handleSubmit}>
        <label>
          First Name:
        </label>
        <input type="text" value={first_name} ref="first_name" onChange={this.handleChange}/>
        <label>
          Last Name:
        </label>
        <input type="text" value={last_name} ref="last_name" onChange={this.handleChange}/>
        <label>
          Position:
        </label>
        <input type="text" value={position} ref="position" onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }
}
