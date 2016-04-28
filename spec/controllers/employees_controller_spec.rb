require 'rails_helper'

RSpec.describe EmployeesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end
  describe "POST #create" do
    subject { post :create, params }
    context "when params are correct" do
      let(:params) { { first_name:"monkey", last_name:"masta", position:"freedom leader" } }

      it { is_expected.to be_success }
      it { expect { subject }.to change(Employee, :count).by 1 }
    end
  end
end
