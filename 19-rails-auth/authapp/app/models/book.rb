class Book < ApplicationRecord
  belongs_to :user

  def title_and_snippet
    self.title + " " + self.snippet
  end
end
