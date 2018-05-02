class User < ApplicationRecord
  has_many :pizzas

  validates :name, uniqueness: true, presence: true
end
