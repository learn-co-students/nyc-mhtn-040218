class PizzaTopping < ApplicationRecord
  belongs_to :pizza
  belongs_to :topping
end
