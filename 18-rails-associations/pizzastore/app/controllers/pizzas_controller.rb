class PizzasController < ApplicationController
  before_action :get_pizza, only: [:show, :edit, :update, :destroy]
  before_action :get_users, only: [:new, :edit]
  before_action :get_toppings, only: [:new, :edit]

  def index
    @pizzas = Pizza.all
  end

  def show
  end

  def new
    @pizza = Pizza.new
  end

  def create
    @pizza = Pizza.create(pizza_params)
    if @pizza.valid?
      redirect_to @pizza
    else
      flash[:errors] = @pizza.errors.full_messages
      redirect_to new_pizza_path
    end
  end

  def edit

  end

  def update
    @pizza.update(pizza_params)
    if @pizza.valid?
      redirect_to @pizza
    else
      flash[:errors] = @pizza.errors.full_messages
      redirect_to edit_pizza_path(@pizza)
    end
  end

  def destroy
    @pizza.destroy
    redirect_to pizzas_path
  end

  private
  def pizza_params
    # if you want your params to permit an array, like a has_many relationship,
    # you need to specify as such in your .permit "topping_ids: []"
    params.require(:pizza).permit(:name, :price, :user_id, topping_ids: [])
  end

  def get_pizza
    @pizza = Pizza.find(params[:id])
  end

  def get_users
    @users = User.all
  end

  def get_toppings
    @toppings = Topping.all
  end

end
