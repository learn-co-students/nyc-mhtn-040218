class BooksController < ApplicationController
  def index
    if logged_in?
      @books = current_user.books
    else
      @books = Book.where(user_id: nil)
    end
  end

  def show
    @book = Book.find(params[:id])
  end
end
