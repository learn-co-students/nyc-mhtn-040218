class Order < ActiveRecord::Base
  has_many :pizzas
  has_many :pizza_toppings
end
