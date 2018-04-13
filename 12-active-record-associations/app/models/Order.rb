class Order < ActiveRecord::Base
  has_many :pizzas
end
