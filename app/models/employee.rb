class Employee < ActiveRecord::Base
  validates_presence_of :first_name, :last_name, :position
end