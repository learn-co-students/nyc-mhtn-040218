class Api::V1::PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
    render json: @pizzas, include: :ingredients
  end

  def create
    @pizza = Pizza.new(pizza_params)
    if @pizza.save
      params[:pizza][:ingredients].each do |ingredient|
        @ingredient = Ingredient.find_or_create_by(name: ingredient)
        PizzaIngredient.create(pizza_id: @pizza.id, ingredient_id: @ingredient.id)
      end
      render json: @pizza, include: :ingredients
    else
      render json: { error: 'Something went wrong!' }
    end
  end

  private

  def pizza_params
    params.require(:pizza).permit(:name, :style, :creator, :img_src)
  end
end
