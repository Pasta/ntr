require "rails_helper"

describe EmployeeSerializer do
  let(:employee) { Employee.create(first_name:"monkey", last_name:"monkey", position:"position") }
  let(:serializer) { EmployeeSerializer.new(employee, root: false) }

  describe "#as_json" do
    subject { serializer.as_json }

    let(:expected_keys) { [:id, :first_name, :last_name, :position] }

    its(:keys) { is_expected.to match_array expected_keys }
  end
end
