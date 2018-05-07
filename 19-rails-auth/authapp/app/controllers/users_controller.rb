class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      redirect_to @user
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to signup_path
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
    authorized_for_user(@user)
    @books = Book.where(user_id: nil).or(Book.where(user_id: @user.id))
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to books_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, book_ids: [])
  end
end
