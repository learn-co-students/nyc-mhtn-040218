class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :logged_in?

  def current_user
    if session[:user_id]
      User.find(session[:user_id])
    end
  end

  def logged_in?
    !!current_user
    # !<user instance> -> false (negate that to get true)
    # !nil -> true (negate that to get false)
  end

  def authorized
    redirect_to login_path unless logged_in?
  end

  def authorized_for_user(user)
    authorized
    if current_user != user
      redirect_to current_user
    end
  end
end
