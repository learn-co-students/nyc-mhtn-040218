class UsersController < ApplicationController
  before_action :get_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
  end

  def show
  end

  def new
    @user = User.new
  end

  def create #url: "/users", method: POST
    @user = User.create(user_params)
    if @user.valid?
      redirect_to @user
    else
      # render :new saves information but also doesn't give
      # the browser the chance to give the user the correct url
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
      # a redirect will make sure the browser makes a full GET request
      # to new_user_path, thereby preserving the correct url in the url bar,
      # but it also loses the information in @user, so you don't get
      # to store the form data for the user
    end
  end

  def edit
  end

  def update
    @user.update(user_params)
    # if @user.update
    if @user.valid?
      redirect_to @user
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to edit_user_path(@user)
    end
  end

  def destroy
    # User.destroy(params[:id])
    @user.destroy
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

  def get_user
    @user = User.find(params[:id])
  end
end
