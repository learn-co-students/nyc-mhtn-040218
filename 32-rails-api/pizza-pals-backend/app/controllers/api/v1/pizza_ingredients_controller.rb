class Api::V1::PizzaIngredientsController < ApplicationController
  def index
    @pizza_ingredients = PizzaIngredient.all
    render json: @pizza_ingredients
  end

  def create
  end
end
