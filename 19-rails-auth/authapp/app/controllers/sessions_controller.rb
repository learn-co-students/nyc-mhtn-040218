class SessionsController < ApplicationController

  def new
    if logged_in?
      redirect_to books_path
    end
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to @user
    else
      flash[:errors] = ["Cannot find username or verify password"]
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    # session.delete(:user_id)

    redirect_to login_path
  end
end
