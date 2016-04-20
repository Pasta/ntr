class CreateEmployeeTable < ActiveRecord::Migration
  def change
    create_table :employee_tables do |t|
      t.string :first_name
      t.string :last_name
      t.integer :manager_id
      t.datetime :start_date
      t.datetime :end_date
      t.string :title
    end
  end
end
