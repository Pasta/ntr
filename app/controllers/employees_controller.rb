class EmployeesController < ApplicationController
  def index
    @dashboard_props = { employees: [ { first_name:"vincent", last_name:"coste", id:"1"} ] }
  end
end
