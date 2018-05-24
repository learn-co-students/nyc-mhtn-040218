class PizzaIngredient < ApplicationRecord
  belongs_to :pizza
  belongs_to :ingredient
end
