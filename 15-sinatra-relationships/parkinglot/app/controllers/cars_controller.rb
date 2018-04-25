class CarsController < ApplicationController

  # INDEX - READ - ALL
  get "/cars" do
    @cars = Car.all
    erb :"cars/index"
  end

  get "/cars/new" do
    @lots = Lot.all
    erb :"cars/new"
  end


  # SHOW - READ - ONE

  get "/cars/:id" do
    @car = Car.find(params[:id])
    erb :"cars/show"
  end

  # NEW - CREATE - ONE (on the entire collection)


  post "/cars" do
    car = Car.create(params[:car])
    # Car.create(make: params[:make], year: params[:year])
    redirect "/cars/#{car.id}"
    # erb :"cars/show"
  end

  # UPDATE - UPDATE - ONE

  get "/cars/:id/edit" do
    @car = Car.find(params[:id])
    @lots = Lot.all
    erb :"cars/edit"
  end

  patch "/cars/:id" do
    car = Car.find(params[:id])
    car.update(params[:car])
    redirect "/cars/#{car.id}"
  end

  # DELETE - DELETE - ONE (on the entire collection)

  delete "/cars/:id" do
    Car.delete(params[:id])
    redirect "/cars"
  end

end
