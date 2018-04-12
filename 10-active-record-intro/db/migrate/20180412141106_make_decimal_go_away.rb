class MakeDecimalGoAway < ActiveRecord::Migration[5.1]
  def change
    change_column :pizzas, :price, :integer
  end
end
