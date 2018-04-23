class FishController < ApplicationController
  get "/fishies" do
    @fishes = Fish.all.sort_by { |fish| fish.weight }.reverse
    # do all kinds of sick manipulations on data here

    erb :"fish/index"
  end

  get "/fishies/:id" do
    @fish = Fish.find(params[:id])
    erb :"fish/show"
  end
end
