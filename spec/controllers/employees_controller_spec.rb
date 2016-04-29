require 'rails_helper'

describe EmployeesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    subject { post :create, params }
    context "when params are correct" do
      let(:params) { { employee: { first_name:"monkey", last_name:"masta", position:"freedom leader" } } }

      it { is_expected.to be_success }
      it { expect { subject }.to change(Employee, :count).by 1 }
    end

    context "when params are not correct" do
      let(:params) { { employee: { first_name:"monkey", position:"freedom leader" } } }

      it { is_expected.not_to be_success }
      it { expect { subject }.to change(Employee, :count).by 0 }
      its(:status) { is_expected.to eq 400 }
    end
  end

end
