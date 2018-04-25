class DriversController < ApplicationController

  get "/drivers" do
    @drivers = Driver.all
    erb :"drivers/index"
  end

  get "/drivers/new" do
    @cars = Car.all
    erb :"drivers/new"
  end

  get "/drivers/:id" do
    @driver = Driver.find(params[:id])
    erb :"drivers/show"
  end

  post "/drivers" do
    binding.pry
    driver = Driver.create(params[:driver])
    redirect "/drivers/#{driver.id}"
  end

  get "/drivers/:id/edit" do
    @driver = Driver.find(params[:id])
    @cars = Car.all
    erb :"drivers/edit"
  end

  patch "/drivers/:id" do
    driver = Driver.find(params[:id])
    driver.update(params[:driver])
    redirect "/drivers/#{driver.id}"
  end

  delete "/drivers/:id" do
    Driver.delete(params[:id])
    redirect "/drivers"
  end
end
