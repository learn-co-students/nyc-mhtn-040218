class LotsController < ApplicationController

  get "/lots" do
    @lots = Lot.all
    erb :"lots/index"
  end

  get "/lots/new" do
    erb :"lots/new"
  end

  get "/lots/:id" do
    @lot = Lot.find(params[:id])
    erb :"lots/show"
  end

  post "/lots" do
    lot = Lot.create(name: params[:name])
    redirect "/lots/#{lot.id}"
  end

  get "/lots/:id/edit" do
    @lot = Lot.find(params[:id])
    erb :"lots/edit"
  end

  patch "/lots/:id" do
    lot = Lot.find(params[:id])
    lot.update(name: params[:name])
    redirect "/lots/#{lot.id}"
  end

  delete "/lots/:id" do
    Lot.delete(params[:id])
    redirect "/lots"
  end
end
