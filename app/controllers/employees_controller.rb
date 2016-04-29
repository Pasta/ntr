class EmployeesController < ApplicationController
  def index
    @dashboard_props = { employees: [ { first_name:"vincent", last_name:"coste", id:"1"} ] }
  end

  def new; end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      render json: @employee, serializer: EmployeeSerializer, status: 200
    else
      render json: @employee.errors, status: 400
    end
  end

  private

  def employee_params
    params.require(:employee).permit(:first_name,:last_name,:position)
  end

end
