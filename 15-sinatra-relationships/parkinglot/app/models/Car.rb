class Car < ActiveRecord::Base
  belongs_to :lot
  has_many :reservations
  has_many :drivers, through: :reservations
end
