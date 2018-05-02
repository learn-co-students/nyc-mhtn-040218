class Topping < ApplicationRecord
  has_many :pizza_toppings
  has_many :pizzas, through: :pizza_toppings

  validates :name, uniqueness: true, presence: true
end
