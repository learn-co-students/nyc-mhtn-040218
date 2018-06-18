class UsersController < ApplicationController
  before_action :requires_login, only: [:users_snacks]
  before_action :requires_user_match, only: [:users_snacks]

  def create
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    if (@user.save)
      token = generate_token

      render json: {
        token: token,
        id: @user.id
      }
    else
      render json: {
        errors: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def users_snacks
    # To test and play with our withLoading HOC.
    # byebug
    render json: @user.snacks
  end

end
