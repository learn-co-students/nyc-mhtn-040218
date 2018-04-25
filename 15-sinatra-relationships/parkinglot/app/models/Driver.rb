class Driver < ActiveRecord::Base
  has_many :reservations
  has_many :cars, through: :reservations
  has_many :lots, through: :cars
end
