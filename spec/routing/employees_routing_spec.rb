require "spec_helper"

describe EmployeesController, type: :routing do
  it { expect(get('/employees')).to route_to('employees#index')}
end
