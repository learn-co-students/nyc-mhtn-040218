class BeanieBabiesController < ApplicationController
  def index
    @beaniebabies = BeanieBaby.all
  end

  def show
    @beaniebaby = BeanieBaby.find(params[:id])
  end

  def new
    @beaniebaby = BeanieBaby.new
  end

  def create
    # byebug
    @beaniebaby = BeanieBaby.create(b_params)

    if @beaniebaby.valid?
      # byebug
      flash[:hello] = "World"
      redirect_to @beaniebaby
    else
      # byebug
      flash[:errors] = @beaniebaby.errors.full_messages
      redirect_to new_beanie_baby_path(@beaniebaby)
    end

  end

  def edit
    @beaniebaby = BeanieBaby.find(params[:id])
  end

  def update
    @beaniebaby = BeanieBaby.find(params[:id])
    @beaniebaby.update(b_params)

    # redirect_to @beaniebaby
    
    if @beaniebaby.valid?
      # byebug
      redirect_to @beaniebaby
    else
      # byebug
      flash[:errors] = @beaniebaby.errors.full_messages
      redirect_to edit_beanie_baby_path(@beaniebaby)
    end
  end

  def destroy
    BeanieBaby.destroy(params[:id])

    # this won't work since we haven't assigned
    # @beanie_babies to anything
    redirect_to beanie_babies_path
  end


  private
  def b_params
    params.require(:beanie_baby).permit(:name, :price, :rarity, :fluffiness)
  end
end
