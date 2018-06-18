 class SnacksController < ApplicationController
   before_action :requires_login, only: [:index]

  def index
    # Decode with the secret and the param set to true!
    # we'll get this somewhere
    # token = ...???
    # We get it from headers!
    # And we get headers from request!
    # if is_authenticated?(token)
    #   render json: Snack.all
    # else
    #   render json: {
    #     message: "No good"
    #   }, status: :unauthorized
    # end

    # To test and play with our withLoading HOC.
    # byebug
    render json: Snack.all
  end

end
