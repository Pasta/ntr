require "spec_helper"

describe EmployeesController, type: :routing do
  it { expect(get('/employees')).to route_to('employees#index')}
  it { expect(get('/employees/new')).to route_to('employees#new')}
  it { expect(post('/employees')).to route_to('employees#create')}
end
