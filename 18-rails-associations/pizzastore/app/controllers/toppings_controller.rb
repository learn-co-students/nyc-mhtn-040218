class ToppingsController < ApplicationController
  before_action :get_topping, only: [:show, :edit, :update, :destroy]

  def index
    @toppings = Topping.all
  end

  def show
  end

  def new
    @topping = Topping.new
  end

  def create
    @topping = Topping.create(topping_params)
    if @topping.valid?
      redirect_to @topping
    else
      flash[:errors] = @topping.errors.full_messages
      redirect_to new_topping_path
    end
  end

  def edit
  end

  def update
    @topping.update(topping_params)
    if @topping.valid?
      redirect_to @topping
    else
      flash[:errors] = @topping.errors.full_messages
      redirect_to edit_topping_path(@topping)
    end
  end

  def destroy
    @topping.destroy
    redirect_to toppings_path
  end

  private
  def topping_params
    params.require(:topping).permit(:name)
  end

  def get_topping
    @topping = Topping.find(params[:id])
  end
end
