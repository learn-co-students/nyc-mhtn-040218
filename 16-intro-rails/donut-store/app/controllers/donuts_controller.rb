class DonutsController < ApplicationController

  def index
    @donuts = Donut.all
  end

  def show
    @donut = Donut.find(params[:id])
  end

end
